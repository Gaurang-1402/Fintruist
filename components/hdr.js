import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

const hdr = () => {
  return (
    <Menu style={{ marginTop: "08px" }}>
      <Link route="/"><a className="item">CrowdCoin</a></Link>
    </Menu>
  );
};

export default hdr;