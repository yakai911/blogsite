import React from "react";
import { PostMasonry, MasonryPost, PostGrid } from "../components/common";
import novel from "../assets/mocks/novel";
import featured from "../assets/mocks/featured";

export default function Home() {
  const novelConfig = {
    0: {
      gridArea: "1/2/3/3",
    },
  };

  const featuredConfig = {
    0: {
      gridArea: "1/1/2/3",
      height: "300px",
    },
    1: {
      height: "300px",
    },
    3: {
      height: "630px",
      marginLeft: "30px",
      width: "635px",
    },
  };

  const mergeStyles = function (posts, config) {
    posts.forEach((post, index) => {
      post.style = config[index];
      post.author = "hapmoniym";
      post.description =
        "这些短篇小说大多源自我做的梦，它们在梦中具体而真实，或许在小说里的梦不是这样...";
    });
  };

  const recentPosts = [...novel, ...featured, ...featured];

  mergeStyles(novel, novelConfig);
  mergeStyles(featured, featuredConfig);

  const lastFeatured = featured.pop();

  return (
    <main className="home">
      <section className="container">
        <div className="row">
          <section className="featured-posts-container">
            <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
            <MasonryPost post={lastFeatured} tagsOnTop={true} />
          </section>
        </div>
      </section>
      <section className="bg-white">
        <section className="container">
          <div className="row">
            <h1>Recent Post</h1>
            <PostGrid posts={recentPosts} />
          </div>
        </section>
      </section>

      <section className="container">
        <div className="row">
          <PostMasonry posts={novel} columns={3} />
        </div>
      </section>
    </main>
  );
}
