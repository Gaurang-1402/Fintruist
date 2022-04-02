import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";



class CtribForm extends Component {
  state = {
    value: "", errorMessage: "", loading: false,
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
