const http = require("http");
const fs = require("fs");
const path = require("node:path");

const containers = [
    {
        filename: 'database-server',
        container_name: 'db'
    },
    {
        filename: 'api-server',
        container_name: 'api'
    },
    {
        filename: 'minio-server',
        container_name: 'minio'
    },
    {
        filename: 'redis',
        container_name: 'redis'
    }]


setInterval(() => {
    http.get("http://192.168.100.64:8080/api/v1.3/subcontainers", (res) => {
        let data = "";

        res.on("data", (chunk) => {
            data += chunk;
        });

        res.on("end", () => {
            const cAdvisorResponse = JSON.parse(data);

            for (const item of cAdvisorResponse) {
                if (item && item?.aliases) {
                    containers.forEach(container => {
                        if (item.aliases.includes(container.container_name)) {
                            const lastStat = item.stats.slice(-1)[0];

                            const cpuNS = lastStat.cpu.usage.total;
                            const memoryMB = (lastStat.memory.usage / 1024 / 1024).toFixed(2);

                            console.log(`[${new Date().toISOString()}] - ${container.filename} - CPU(ns): ${cpuNS} | Mem(MB): ${memoryMB}`);

                            const logPath = path.resolve(`../logs/${container.filename}_metrics.csv`)


                            fs.appendFileSync(logPath, `${new Date().toISOString()},${cpuNS},${memoryMB}\n`);
                        }

                    })
                }
            }

        });
    });
}, 1000);
