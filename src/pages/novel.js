import React from "react";
import { useQuery } from "@apollo/react-hooks";

import withTitle from "../components/common/with-title";
import PostGrid from "../components/common/post-grid";
import { GET_POSTS_BY_CATEGORIES_QUERY } from "../queries/posts";

const catIds = [1, 2, 3, 4, 5];

export default function Novel({ history }) {
  const { data, error } = useQuery(GET_POSTS_BY_CATEGORIES_QUERY, {
    variables: catIds,
  });

  if (error) {
    return "有什么地方出错了...";
  }

  return withTitle(
    "小说",
    data?.posts ? <PostGrid post={data.posts} /> : "正在加载..."
  );
}
