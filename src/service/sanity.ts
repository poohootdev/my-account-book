import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATA_SET,
  useCdn: false,
  apiVersion: '2023-09-10',
  token: process.env.SANITY_SECRET_TOKEN,
});
