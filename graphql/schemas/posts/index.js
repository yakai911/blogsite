const novelPosts = require("./mocks/novel");
const featuredPosts = require("./mocks/featured");
const fs = require("fs");
const path = require("path");

module.exports = {
  resolvers: {
    Query: {
      novelPosts: () => novelPosts,
      featuredPosts: () => featuredPosts,
      recentPosts: () => [...novelPosts, ...featuredPosts, ...featuredPosts],
    },
  },
  schema: fs
    .readFileSync(path.resolve(__dirname, "./posts-schema.graphql"))
    .toString(),
};
