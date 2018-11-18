import React from "react";
import { Link } from "gatsby";

export default function home(props) {
  const {
    pageContext: { terms }
  } = props;

  return (
    <div>
      {terms.map(term => {
        return (
          <div>
            <h1>Default taxonomy archive</h1>
            <Link key={term.pathname} to={term.pathname}>
              {term.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
