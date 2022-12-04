import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export default sanityClient({
  projectId: '8iu2aw45',
  dataset: 'home',
  useCdn: true,
  apiVersion: '2022-12-04',
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);
