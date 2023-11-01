const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login', // Defina o caminho da sua página de login
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
