import React, { Component } from "react";
import Spinner from "../components/spinner/spinner";

const withData = (View) => {
  return class WithData extends Component {
    state = {
      data: null,
    };

    componentDidMount() {
      this.props.getData().then((data) => {
        this.setState({ data });
      });
    }

    render() {
      if (!this.state.data) {
        return <Spinner />;
      }

      return <View {...this.props} data={this.state.data} />;
    }
  };
};

export default withData;