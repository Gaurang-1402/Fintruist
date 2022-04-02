import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Message, Input } from "semantic-ui-react";

import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";


class RewNew extends Component {
  state = {
    value: "",
    description: "",
    recipient: "",
    loading: false,
    errorMessage: "",
  };
  
  onSubmit = async (event) => {
    event.preventDefault();
    const campaign = Campaign(this.props.address);
    this.setState({ loading: true, errorMessage: "" });
    const { description, value, recipient } = this.state;
    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, value, recipient)
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send ({
          from: accounts[0]
        });
      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    }
        .send({ from: accounts[0] });
      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
      Router = Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
      console.log(err);
    }
    this.setState({ loading: false });
  };

  render() {
    return (
    );
  }
}

export default RewNew;
