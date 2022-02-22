import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import {Button} from 'semantic-ui-react';
import {Link} from '../../../routes';



class RequestIndex extends Component {
    static async getInitialProps(props) {
        const {address} = props.query;

        return {address};
    }
    render() {
        return (
            <Layout>
                <h3>Request</h3>
                <Link route = {`/campaigns/${this.props.address}/requests/new`}>
                <a>
                    <button primary> 
                    Add Request
                    </button>
                </a>
                </Link>
            </Layout>
        );
    }
}

export default RequestIndex;