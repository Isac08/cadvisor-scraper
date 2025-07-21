const csv = require('csv-parser')
const fs = require("fs/promises");
const fsNode = require("node:fs");
const path = require("node:path");

const toNumber = (value) => {
    try {
        if (value !== null && typeof value === "object") {
            const entries = Object.entries(value).map(([key, val]) => {
                return [key, toNumber(val)]
            })
            return Object.fromEntries(entries)
        }

        if (typeof value !== "boolean" && value !== undefined && value !== null && value !== "" && !isNaN(value)) {
            return Number(value)
        }

        return value
    } catch (error) {
        throw new Error("toNumber crashed: " + error.message)
    }
}

const resourceCalc = async (started_at, finished_at, {csvFile = '', MEMORY_LIMIT_BYTES = 0, CPU_LIMIT_CORE = 0}) => {
    const filePath = path.resolve("../logs", csvFile)

    let prevCPU = null, prevTimestamp = null

    const CPUUsagesPercentage = []
    const memoryUsagesPercentage = []
    const memoryUsagesInMB = []


    return new Promise((resolve, reject) => {
        fsNode.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => {
                if (!data?.cpu && !data?.memory) return

                const {timestamp, cpu: CPU, memory} = toNumber(data)
                const timestampInMillis = new Date(timestamp).getTime()


                // ignore all data outside the specific range
                if (timestampInMillis < started_at || timestampInMillis > finished_at) return

                // memory usage percentage calc
                const memoryPercentage = ((memory * 1024 * 1024) / MEMORY_LIMIT_BYTES) * 100

                if (!isNaN(memoryPercentage)) memoryUsagesPercentage.push(memoryPercentage)

                // memory usage in MB calc
                if (!isNaN(memory)) memoryUsagesInMB.push(memory)

                // CPU usage calc
                if (prevCPU !== null && prevTimestamp !== null) {
                    const deltaCPU = CPU - prevCPU
                    const deltaTime = (timestampInMillis - prevTimestamp) * 1000000

                    const CPUPercentage = (deltaCPU / deltaTime) * 100 / CPU_LIMIT_CORE;

                    if (!isNaN(CPUPercentage)) CPUUsagesPercentage.push(CPUPercentage);
                }

                prevCPU = CPU
                prevTimestamp = timestampInMillis

            })
            .on('finish', () => {
                resolve({
                    [csvFile]: toNumber({
                        avg_cpu_usage: (CPUUsagesPercentage.reduce((acc, cpu) => acc + cpu, 0) / CPUUsagesPercentage.length).toFixed(2),
                        cpu_usage_peak: Math.max(...CPUUsagesPercentage).toFixed(2),
                        // avg_memory_usage: (memoryUsagesPercentage.reduce((acc, mem) => acc + mem, 0) / memoryUsagesPercentage.length).toFixed(2),
                        // memory_usage_peak: Math.max(...memoryUsagesPercentage).toFixed(2),
                        avg_memory_usage_in_mb: (memoryUsagesInMB.reduce((acc, mem) => acc + mem, 0) / memoryUsagesInMB.length).toFixed(2),
                        memory_usage_peak_in_mb: Math.max(...memoryUsagesInMB).toFixed(2),
                    })
                })
            })
            .on('error', (err) => {
                console.log('error', err)
                reject(err)
            })
    })
}

const call = async (s, n) => {
    const containers = [
        {
            log_file: "api-server_metrics.csv",
            CPU_LIMIT_CORE: 0.8,
            MEMORY_LIMIT_BYTES: 768 * 1024 * 1024,
        },
        {
            log_file: "database-server_metrics.csv",
            CPU_LIMIT_CORE: 0.8,
            MEMORY_LIMIT_BYTES: 1024 * 1024 * 1024,
        },
        {
            log_file: "minio-server_metrics.csv",
            CPU_LIMIT_CORE: 0.2,
            MEMORY_LIMIT_BYTES: 512 * 1024 * 1024,
        },
        {
            log_file: "redis_metrics.csv",
            CPU_LIMIT_CORE: 0.1,
            MEMORY_LIMIT_BYTES: 128 * 1024 * 1024,
        },
    ]

    return Promise.all(containers.map((container) => resourceCalc(s, n, {
        csvFile: container.log_file,
        CPU_LIMIT_CORE: container.CPU_LIMIT_CORE,
        MEMORY_LIMIT_BYTES: container.MEMORY_LIMIT_BYTES
    })))
}

(async () => {
    const syncData = [
        {
            sync_id: 1,
            user_id: 4,
            started_at: 1752773784839,
            finished_at: 1752773813192,
        },
        {
            sync_id: 2,
            user_id: 5,
            started_at: 1752774745483,
            finished_at: 1752774806156,
        },
        {
            sync_id: 3,
            user_id: 6,
            started_at: 1752775045547,
            finished_at: 1752775221867,
        },
        {
            sync_id: 4,
            user_id: 7,
            started_at: 1752775552189,
            finished_at: 1752776015740,
        },
        {
            sync_id: 6,
            user_id: 14,
            started_at: 1752777272849,
            finished_at: 1752777545575,
        },
    ]

    for (const syncDatum of syncData) {
        syncDatum.resource_calc_result = await call(syncDatum.started_at, syncDatum.finished_at);
    }

    await fs.appendFile("./resource_calc_result.js", JSON.stringify(syncData))

    console.log('result', JSON.stringify(syncData, null, 2))

})()