import React, { Component } from "react";
// import { connect } from "react-redux";
import { Form, Button, Message, Input } from "semantic-ui-react";
import { Link, Router } from "../../../routes";

import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";
import Lyout from "../../../components/Lyout";

class RewNew extends Component {
  state = {
    value: "",
    description: "",
    recipient: "",
    loading: false,
    errorMessage: "",
  };

  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const campaign = Campaign(this.props.address);
    // this.setState({ loading: true, errorMessage: "" });
    const { description, value, recipient } = this.state;
    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        // .createRequest(description, value, recipient)
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
    //     .send ({
    //       from: accounts[0]
    //     });
    //   Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    // }
        .send({ from: accounts[0] });
      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
      // Router = Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
      // console.log(err);
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Lyout>
        <Link route={`/campaigns/${this.props.address}/requests`}>
          <a>Back</a>
        </Link>
        <h3>Create new Request</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={(event) =>
                this.setState({ description: event.target.value })
              }
            />
          </Form.Field>

          <Form.Field>
            <label>Value in Ether</label>
            <Input
              value={this.state.value}
              onChange={(event) => this.setState({ value: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Recipient</label>
            <Input
              value={this.state.recipient}
              onChange={(event) =>
                this.setState({ recipient: event.target.value })
              }
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          {/* <Button loading={this.state.loading} primary> */}
          <Button primary loading={this.state.loading}>
            Create!
          </Button>
        </Form>
      </Lyout>
    );
  }
}

export default RewNew;
