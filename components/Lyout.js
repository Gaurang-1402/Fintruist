import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
// import hdr from "./hdr";

const Lyout = (props) => {
  return (
    <div>
      <Container>
        <Head>
          <link rel="stylesheet" href="https://cdn.tailwindcss.com"></link>
        </Head>
        <hdr />
      </Container>
    </div>
  );
};
export default Lyout;
