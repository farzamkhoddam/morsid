module.exports = {
  env: {
    clickFunelPaymentUrl: "https://go.thehustleclub.com/sp-v1",
  },
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
