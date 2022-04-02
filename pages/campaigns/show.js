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
