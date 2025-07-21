const axios = require("axios");
const {users, BASE_URL} = require("../seeder/users");


async function callGetEndpoint(full_name, token) {
    const response = await axios.get(
        `${BASE_URL}/synchronizations`,
        {
            headers: {
                Authorization: token,
            },
        }
    )

    if (response.status === 200) {
        const {user_id, progress, started_at, finished_at, error_logs, duration} = response.data.data || {}
        return {
            full_name, status: response.status, data: {
                user_id,
                progress,
                started_at,
                finished_at,
                duration,
                error_logs,
            }
        };
    }

}

let i = 0

setInterval(async () => {
    const result = await Promise.all(users.map((u) => callGetEndpoint(u.full_name, u.token)));

    result.sort((a, b) => a.full_name - b.full_name).forEach(result => {
        console.log(`response: `, result)
    });

    console.log(`===============  ${i}  ===============`)
    i++
}, 3000)