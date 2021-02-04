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
  async headers() {
    return [
      {
        "cache-control": "s-maxage=1, stale-while-revalidate",
      },
    ];
  },
};
