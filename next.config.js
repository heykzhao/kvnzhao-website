/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/wordle",
        destination: "https://wordle5678.netlify.app",
        permanent: true,
      },
      {
        source: "/weather",
        destination: "https://weather3point0.netlify.app",
        permanent: true,
      },
      {
        source: "/calc",
        destination: "https://heykzhao.github.io/top_calculator/",
        permanent: true,
      },
      {
        source: "/spotify",
        destination: "https://github.com/heykzhao/spotify-remove-all-albums",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
