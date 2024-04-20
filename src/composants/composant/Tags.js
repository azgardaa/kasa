import React from "react";

function Tags({ tags }) {
  return (
    <div className="Box_Tags">
      {tags.map((tag, index) => (
        <h3 className="Tag" key={index}>
          {tag}
        </h3>
      ))}
    </div>
  );
}

export default Tags;
