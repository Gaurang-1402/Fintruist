import React, { Component } from "react";
// import { connect } from "react-redux";
import { Button, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import Lyout from "../../../components/Lyout";

/* This is importing the Campaign class from the ethereum folder. */
import Campaign from "../../../ethereum/campaign";
// import Web3 from "../../../web3";
import ReqRow from "../../../components/ReqRow";

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaign = Campaign(address);
    const requestCnt = await campaign.methods.getReqstCnt().call();
    // const requests = await Promise.all(
    //   Array(parseInt(requestCnt)).fill().map((element, index) => {
    //     return campaign.methods.requests(index).call();
    //   })
    const approverCnt = await campaign.methods.approverCnt().call();

    const requests = await Promise.all(
      Array(parseInt(requestCnt))
        .fill()
        .map((element, index) => {
          // console.log(index);
          return campaign.methods.requests(index).call();
        })
    );
    return { address, requests, requestCount, approverCnt };
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return (
        <ReqRow
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          approverCnt={this.props.approverCnt}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Lyout>
        <h3>Requests</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary floated="right" style={{ marginBottom: 08 }}>
              Add Request
            </Button>
          </a>
        </Link>

        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell><HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell><HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approval Count</HeaderCell><HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
          {/* <Table.Footer> */}
        </Table>
        <div>Found {this.props.requestCount} requests.</div>
      </Lyout>
    );
  }
}

export default RequestIndex;
