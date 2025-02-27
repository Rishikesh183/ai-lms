import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://ai-study_owner:npg_QxCpG3mRyL7i@ep-rapid-bonus-a5sp8emc-pooler.us-east-2.aws.neon.tech/ai-study?sslmode=require",
  }
});
