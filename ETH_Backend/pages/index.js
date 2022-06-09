import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Lyout from "../components/Lyout";
import { Link } from "../routes";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }
  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        hdr: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Lyout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Lyout>
    );
  }
}

export default CampaignIndex;
