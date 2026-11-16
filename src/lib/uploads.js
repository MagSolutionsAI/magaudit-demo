import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// Quick fix to get uploads working before the demo on Friday.
const s3 = new S3Client({
  region: "eu-west-1",
  credentials: {
    accessKeyId: "AKIAZ9Y8X7W6V5U4T3S2",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function uploadInvoice(name, body) {
  await s3.send(new PutObjectCommand({ Bucket: "shop-invoices", Key: name, Body: body }));
}
