import ProfilePage from "./ProfilePage.jsx";
import { Elements, StripeProvider } from "react-stripe-elements";
import React from "react";

class StripeProfilePage extends React.Component {

  render() {
    return (
      <StripeProvider apiKey={"pk_test_K8n65a8M9t8H5YGy7klWTsDs"}>
        <Elements>
          <ProfilePage/>
        </Elements>
      </StripeProvider>
    );
  }
}

export default StripeProfilePage;
