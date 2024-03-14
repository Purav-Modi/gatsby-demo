import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Home = () => {
  const data = graphql`
    {
      users {
        id
        email
        name
      }
    }
  `;

  return (
    <div>
      {console.log(data, "data")}
      <h1>Fake GraphQL Query Example</h1>
    </div>
  );
};

export default Home;
