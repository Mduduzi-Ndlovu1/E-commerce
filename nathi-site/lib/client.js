import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
import build from 'next/dist/build';

export const client = sanityClient({
    projectId: 'izr3mr25',
    dataset: 'production',
    apiVersion: '2022-04-01',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);