
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'jxtkqcmi',
  dataset: 'production',
  useCdn: true, 
});

export default client;
