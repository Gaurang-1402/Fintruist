import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";

import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

import { Router } from "../routes";
// import Layout from "../components/Layout";

class CtribForm extends Component {
  state = {
    value: "", errorMessage: "", loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const Campgn = Campgn(this.props.address);
    // const accounts = await web3.eth.getAccounts();
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await Campgn.methods.contribute().send({
        from: accounts[0], value: web3.utils.toWei(this.state.value, "ether"),
      });
      // Router .pushRoute(`/campaigns/${this.props.address}/requests`);
      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    // this.setState({ loading: false });
    this.setState({ loading: false, value: "" });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            value={this.state.value}
            onChange={(event) => this.setState({ value: event.target.value })}
            label="ether" labelPosition="right"
          />
        </Form.Field>
        <Message error header="Oopsie!" content={this.state.errorMessage} />
        {/* <Button primary disabled={this.state.loading}> */}
        <Button primary loading={this.state.loading}>
          Contribute!
        </Button>
      </Form>
    );
  }
}

export default CtribForm;
