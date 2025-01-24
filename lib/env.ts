import { z } from "zod";

const envSchema = z.object({
  PROJECT_ID: z.string(),
  API_KEY: z.string(),
  DATABASE_ID: z.string(),
  PATIENT_COLLECTION_ID: z.string(),
  DOCTOR_COLLECTION_ID: z.string(),
  APPOINTMENT_COLLECTION_ID: z.string(),
  NEXT_PUBLIC_BUCKET_ID: z.string(),
  NEXT_PUBLIC_ENDPOINT: z.string(),
});

console.log(process.env)
export const env = envSchema.parse(process.env);


