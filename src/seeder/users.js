const BASE_URL = 'https://api.isac-dev.com/api/v1';

const users = [
    {
        full_name: "satu",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo4LCJicmFuY2hfaWQiOm51bGwsImlzX3JlZ2lzdHJhdGlvbl9jb21wbGV0ZWQiOnRydWUsImlhdCI6MTc1Mjc3MTg5OSwiZXhwIjoxNzUyODU4Mjk5fQ.rrIFPT5in39FAZS_SaKzEIXeD8D1a9tYj4Or2buHPoY",
        file: 'medium/50k.zip'
    },
    {
        full_name: "dua",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo5LCJicmFuY2hfaWQiOm51bGwsImlzX3JlZ2lzdHJhdGlvbl9jb21wbGV0ZWQiOnRydWUsImlhdCI6MTc1Mjc3MTkyNiwiZXhwIjoxNzUyODU4MzI2fQ.qs_QKtwxFURJzJEuOuIUersvd5eCJzmqh_7fZEgSYko",
        file: 'small/10k.zip'
    },
    {
        full_name: "tiga",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMCwiYnJhbmNoX2lkIjpudWxsLCJpc19yZWdpc3RyYXRpb25fY29tcGxldGVkIjp0cnVlLCJpYXQiOjE3NTI3NzE5NTAsImV4cCI6MTc1Mjg1ODM1MH0.N9uSgpfjVV1pmXsdiOquwfnJkexrKywP0J1xjZ1L0MA",
        file: 'extra-large/300k.zip'
    },
    {
        full_name: "empat",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMSwiYnJhbmNoX2lkIjpudWxsLCJpc19yZWdpc3RyYXRpb25fY29tcGxldGVkIjp0cnVlLCJpYXQiOjE3NTI3NzE5NzYsImV4cCI6MTc1Mjg1ODM3Nn0.Bjc2PqUJahV9vrjcaGVV4-BLRsVstJHWtT4r3V8AUk8",
        file: 'small/10k.zip'
    },
    {
        full_name: "lima",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMiwiYnJhbmNoX2lkIjpudWxsLCJpc19yZWdpc3RyYXRpb25fY29tcGxldGVkIjp0cnVlLCJpYXQiOjE3NTI3NzIwMTUsImV4cCI6MTc1Mjg1ODQxNX0.1ZMwqniM6q1HnYSqBIYwSNoYHzToaocraWFsRyWjI18",
        file: 'large/150k.zip'
    },
]

module.exports = {
    users, BASE_URL
}