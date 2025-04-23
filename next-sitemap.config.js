/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://rakmimarlik.com", // kendi domainin
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/thanks"],
  outDir: "public",       // sitemap ve robots.txt buraya yazılacak
  sourceDir: "/src",     // build çıktısı burada
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
  },
};
