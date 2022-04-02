import React, { Component } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";

import factory from "../../ethereum/factory";
import Lyout from "../../components/Lyout";
import web3 from "../../ethereum/web3";


class CampgnNew extends Component {
  state = {
    minContrib: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    console.log("onSubmit");
    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minContrib)
        .send({ from: accounts[0] });

      Router = Router.pushRoute("/");  
      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Lyout>
        <h2>Create Campaign</h2>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Message error hdr="Oops!" content={this.state.errorMessage}/>
          <Button type="submit" loading={this.state.loading}>
          <Button loading={this.state.loading} primary>
            Create!
          </Button>
        </Form>
      </Lyout>
    );
  }
}

export default CampgnNew;