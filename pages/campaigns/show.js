import React, { Component } from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import Lyout from "../../components/Lyout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import CtribForm from "../../components/CtribForm";
import { Link } from "../../routes";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      minContrib: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minContrib,
      requestsCount,
      approversCount,
    } = this.props;

    const items = [
      {
        hdr: manager,
        meta: "Address of Manager",
        description:
          "The manager has created a campaign & can create requests to withdraw money",
        style: { overflowWrap: "break-word" },
      },
      {
        hdr: minContrib,
        meta: "Minimum Contribution (wei)",
        description:
          // "You must contribute atleast this much (amount) Wei so that you can become an approver",
          "You must contribute atleast this much (amount) Wei to become an approver",
      },
      {
        hdr: requestsCount,
        meta: "Number of Requests",
        description:
          // "A single request tries to withdraw money directly from the contract & those must be approved by the approvers",
          "A request tries to withdraw money from the contract. Requests must be approved by approvers",
      },
      {
        hdr: approversCount,
        meta: "Number of Approvers",
        description:
          // "Count of Campaign donators",
          "Number of people who have already donated to this campaign",
      },
      {
        hdr: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (ether)",
        description:
          // "The balance is how much money this campaign has left to spend.",
          "The amount of money left to spend for this campaign",
      },
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Lyout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
            <Grid.Column width={6}>
              <CtribForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Lyout>
    );
  }
}

export default CampaignShow;
