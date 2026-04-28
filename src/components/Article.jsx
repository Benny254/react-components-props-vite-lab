import React from "react";

function Article({ title, date, preview }) {
  const displayDate = new Date(date || 0).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article>
      <h3>{title}</h3>
      <small>{displayDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;