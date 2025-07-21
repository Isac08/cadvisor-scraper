const axios = require('axios');
const path = require('path');
const fs = require('fs');
const FormData = require('form-data')
const {users, BASE_URL} = require("../seeder/users");


async function uploadZipFile(token, zipFile) {
    const form = new FormData();
    const filePath = path.resolve("../../dataset", zipFile);
    // console.log('zipURL', zipFile, filePath);

    form.append("data", fs.createReadStream(filePath));

    return axios.post(
        `${BASE_URL}/synchronizations`,
        form,
        {
            headers: {
                ...form.getHeaders(),
                Authorization: token,
            },
        }
    )
}


async function runConcurrentTests() {
    return Promise.allSettled(users.map((u) => uploadZipFile(u.token, u.file)));
}

runConcurrentTests().then((result) => console.log(result)).catch((err) => console.log(err));
