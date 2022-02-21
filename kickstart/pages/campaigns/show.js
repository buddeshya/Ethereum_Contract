import React, { Component } from "react";
import { Card, Grid } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
        address: props.query.address,
        minimumContribution: summary[0],
        balance: summary[1],
        requestsCount: summary[2],
        approversCount:summary[3],
        manager: summary[4]
    };
  }

renderCards() {

    const {
        balance,
        manager, 
        minimumContribution, 
        requestsCount, 
        approversCount } = this.props;
   
    const items = [
        {
            header: manager,
            meta:'Address of Manager',
            description: 'The manager created this campaign and can create request to withdraw money',
            style: {overflowWrap:'break-word'}
        },
        {
            header:minimumContribution,
            meta: "minimumContribution",
            description:"You Must contribute minimum this mush wei to the campaign",
            style: {overflowWrap:'break-word'}
        },
        {
            header:requestsCount,
            meta:"Number of the Request",
            description:"A request tries to withdra money from the contract. Request must be approved by approvers",
            style: {overflowWrap:'break-word'}
        },
        {
            header:approversCount,
            meta:"Number of Approvers",
            description:" Number of people have already donated to this campaign",
            style: { overflowWrap:'break-word'}

        },
        {
            header: web3.utils.fromWei(balance, 'ether'),
            meta:"Campaign Balance( Ether )",
            description:"The balance is how mush money has left to spend"
        }
    ];

    return <Card.Group items={items} />

}

  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
            <Grid.Column width = {10}>
            {this.renderCards()}
            </Grid.Column>
            <Grid.Column width={6}>
            <ContributeForm address= {this.props.address}></ContributeForm>
            </Grid.Column>
        </Grid>

      </Layout>
    );
  }
}

export default CampaignShow;