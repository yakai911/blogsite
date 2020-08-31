import React from "react";
import { categoryColors } from "./styles";

export default function TagRow({ tags }) {
  console.log(tags);
  return (
    <div className="tags-container">
      {tags.map((tag, ind) => (
        <span
          key={ind}
          className="tag"
          style={{ backgroundColor: categoryColors[tag] }}
        >
          {tag.toUpperCase()}
        </span>
      ))}
    </div>
  );
}
