import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: '1m78vl74', // From user request
    dataset: 'production', // From user request
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source);
};
