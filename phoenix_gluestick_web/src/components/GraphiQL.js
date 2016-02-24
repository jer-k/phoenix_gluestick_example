import React, { Component, PropTypes } from "react";
import fetch from 'isomorphic-fetch';
import "assets/css/graphiql.css";

function graphQLFetcher(graphQLParams) {
  return fetch('http://localhost:4000/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

let GraphiQL;

export default class GraphiQLComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mounted: false
    };
  }

  componentDidMount () {
    this.setState({
      mounted: true
    });
    GraphiQL = require("graphiql");
  }
  render () {
    if (!this.state.mounted) return (<div></div>);

    return (
        <GraphiQL fetcher={graphQLFetcher} />
    );
  }
}
