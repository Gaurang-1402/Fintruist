import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
// import hdr from "./hdr";

const Lyout = (props) => {
  return (
    <div>
      <Container>
        <Head>
          {/* <link rel="stylesheet" href="https://cdn.tailwindcss.com"></link> */}
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"></link>
        </Head>
        <hdr />
        {props.children}
      </Container>
    </div>
  );
};
export default Lyout;
