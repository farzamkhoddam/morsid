module.exports = {
  async rewrites() {
    return [
      {
        source: "/logout",
        destination: "/api/users/logout",
      },
    ];
  },
};
