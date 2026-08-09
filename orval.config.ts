import { defineConfig } from "orval";

export default defineConfig({
  understat: {
    input: {
      target: "./openapi_schema/080826_openapi.json",
    },
    output: {
      mode: "tags",
      target: "./src/api/generated",
      schemas: "./src/api/model",
      client: "fetch",
      clean: true,
      override: {
        mutator: {
          path: "./src/api/custom-fetch.ts",
          name: "customFetch",
        },
      },
    },
  },
});