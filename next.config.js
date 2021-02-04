module.exports = {
  images: {
    domains: ["wp.thehustleclub.com"],
  },
  async rewrites() {
    return [
      {
        source: "/logout",
        destination: "/api/users/logout",
      },
    ];
  },
};
