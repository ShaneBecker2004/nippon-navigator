// prisma/prisma.config.ts
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    // add this line to configure the seed command
    seed: "node prisma/seed.js", 
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
});