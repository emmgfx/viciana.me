/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next 16 only serves qualities declared here. 75 is the default, 100 is
    // used by the company logos and the article cover image.
    qualities: [75, 100],
  },
};

module.exports = nextConfig;
