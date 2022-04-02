import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";


class ReqRow extends Component {
  onApprove = async () => {
    const Campgn = Campgn(this.props.address);

    const accounts = await web3.eth.getAccounts(); // fetch accnts
    await Campgn.methods.approveRequest(this.props.id).send({
      from: accounts[0],
    });
  };

  render() {
    const { Row, Cell } = Table;
    const { id, request, approverCnt } = this.props;
    // const { description, value, recipient, address } = request;
    const rdytoFinlize = request.approvalCnt>approverCnt/2;

    return (
      <Row disabled={request.complete} positive={rdytoFinlize && !request.complete}>
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
        <Cell> {request.fetchName}</Cell>
        <Cell>
          {request.complete ? null : (
            <Button color="teal" basic onClick={this.onFinalize}>Finalize</Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default ReqRow;
