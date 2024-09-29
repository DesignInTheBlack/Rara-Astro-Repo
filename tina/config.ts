import { defineConfig } from "tinacms";

// ====================================================================================
// Branch Configuration
// ====================================================================================
// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // ----------------------------------
  // Tina CMS Authentication
  // ----------------------------------
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  // ----------------------------------
  // Build Configuration
  // ----------------------------------
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  // ----------------------------------
  // Media Configuration
  // ----------------------------------
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  // ====================================================================================
  // Content Modeling (Schema)
  // ====================================================================================
  // See docs on content modeling for more info on how to setup new content models:
  // https://tina.io/docs/schema/
  schema: {
    collections: [



      // ----------------------------------
      // Homepage
      // ----------------------------------
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



      // ----------------------------------
      // About
      // ----------------------------------
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



      // ----------------------------------
      // Add more collections as needed
      // ----------------------------------
      // {
      //   label: 'Collection Name',
      //   name: 'collection_name',
      //   path: 'src/content',
      //   match: {
      //     include: 'collection_name',
      //   },
      //   fields: [
      //     {
      //       type: 'string',
      //       label: 'Field Label',
      //       name: 'field_name',
      //     },
      //     // Add more fields as needed
      //   ],
      //   ui: {
      //     allowedActions: {
      //       create: false,
      //       delete: false,
      //     },
      //   },
      // },
    ],
  },
});