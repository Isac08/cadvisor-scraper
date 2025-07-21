// minio-test.mjs
import {Client as MinioClient} from "minio";

const {
    MINIO_ENDPOINT = 'localhost',
    MINIO_PORT = '9000',
    MINIO_USE_SSL = 'false',
    MINIO_ACCESS_KEY = 'minioadmin',
    MINIO_SECRET_KEY = 'minioadmin123',
    MINIO_BUCKET = 'images',
    MINIO_OBJECT_NAME = 'test.jpg',
    MINIO_EXPIRY_SECONDS = '3600',
} = process.env;

const localClient = new MinioClient({
    endPoint: MINIO_ENDPOINT,
    port: parseInt(MINIO_PORT),
    useSSL: MINIO_USE_SSL === 'true',
    accessKey: MINIO_ACCESS_KEY,
    secretKey: MINIO_SECRET_KEY,
});


(async () => {
    try {
        const presigned_url = await localClient.presignedGetObject(
            MINIO_BUCKET,
            MINIO_OBJECT_NAME,
            parseInt(MINIO_EXPIRY_SECONDS)
        );

        console.log('result:', presigned_url);
    } catch (error) {
        console.log('ERROR => ', error);
    }
})()
