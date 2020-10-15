const { WP_BASE_URL } = process.env;

module.exports = {
  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: `${WP_BASE_URL}/graphql`,
      },
    ];
  },
};
