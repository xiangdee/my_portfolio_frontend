// lib/sanity.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';


export const client = createClient({
    projectId: 'vimxt1l1',
    dataset: 'production',
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: '2024-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })

  const builder = imageUrlBuilder(client)

  export function urlFor(source: SanityImageSource) {
    return builder.image(source)
  }
