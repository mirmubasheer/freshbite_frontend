/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    next_public_graphql_api_endpoint:
      "https://freshbitegrocers-p89s8vze7-mubasheers-projects.vercel.app/graphql",
  },

  // if you want to run with local graphQl un-comment below one and comment the above code
  // env: {
  //   API_URL: "http://localhost:4000/graphql",
  // },
  reactStrictMode: true,
};
module.exports = nextConfig;
