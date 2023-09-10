import { client } from './sanity';

export async function getPosts() {
  return client.fetch(
    `
        *[_type == "post_2023" && date == "2023-09-01"]
    `
  );
}
