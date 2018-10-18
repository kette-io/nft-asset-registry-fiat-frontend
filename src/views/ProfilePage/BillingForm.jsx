import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

const BillingForm = class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      storage: "",
      isProcessing: false,
      isCardComplete: false
    };
  }

  validateForm() {
    return (
      //this.props.validateParent() &&
      this.state.name !== "" &&
      this.state.isCardComplete
    );
  }

  async register() {
    const { name } = this.state;
    const { token, error } = await this.props.stripe.createToken({ name });
    await this.props.register({ stripeToken: token, error });
  }

  render() {
    return (
        <CardElement
          onChange={(e) => this.setState({ isCardComplete: e.complete })}
        />
    );
  }
}

export default injectStripe(BillingForm);