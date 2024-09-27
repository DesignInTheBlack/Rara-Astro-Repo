import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/

  schema: {
    collections: [
      {
        label: 'Homepage',
        name: 'homepage',
        path: 'src/content',
        match: {
          include: 'homepage',
        },
        fields: [
          {
            type: 'string',
            label: 'Page Title',
            name: 'title',
          },
          // Add more fields as needed
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
      {
        label: 'About',
        name: 'about',
        path: 'src/content',
        match: {
          include: 'about',
        },
        fields: [
          {
            type: 'string',
            label: 'Page Title',
            name: 'title',
          },
          // Add more fields as needed
        ],
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
      },
    ],
  },


});
