import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import { Elements, StripeProvider } from "react-stripe-elements";
import BillingForm from "./BillingForm.jsx";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      image: '',
      activeTab: 0
    }
  }

  onImageChange(event) {
    if (event.target.files && event.target.files[0]) {

      const file = event.target.files[0];
      const arrayReader = new FileReader();
      arrayReader.onloadend = (e) => {
        //result is image as buffer
        this.setState({ imageBuffer: Buffer(e.target.result) })
      }
      arrayReader.readAsArrayBuffer(file)

      const dataUrlReader = new FileReader();
      dataUrlReader.onloadend = (e) => {
        //result is image as dataURL
        this.setState({ image: e.target.result })
      }
      dataUrlReader.readAsDataURL(file)
    }
  }


  render() {
    const { classes, ...rest } = this.props;
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    const tab = this.state.activeTab;
    return (
      <div>
        <Header
          color="white"
          brand="KETTE asset registry"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div className={classes.test}>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                    <NavPills
                      active={tab}
                      alignCenter
                      color="danger"
                      tabs={[
                        {
                          tabButton: "Bike information",
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                  inputProps={{
                                    onChange: (e) => console.log(e.target.value)
                                  }}
                                  labelText="Frame number"
                                  id="frameNumber"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                />
                                <CustomInput
                                  labelText="Description"
                                  id="desc"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                />
                                <label>
                                  Picture of your Bike
                              </label>
                                <div className="control">
                                  <input
                                    type="file"
                                    className="input"
                                    onChange={this.onImageChange.bind(this)} />
                                </div>
                                <img
                                  alt="..."
                                  src={this.state.image}
                                  className={navImageClasses}
                                />

                              </GridItem>
                            </GridContainer>
                          )
                        },
                        {
                          tabButton: "Ethereum Address",
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={12} md={8}>
                                <CustomInput
                                  inputProps={{
                                    onChange: (e) => console.log(e.target.value)
                                  }}
                                  labelText="Ethereum Address"
                                  id="ethAddress"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                />
                              </GridItem>
                            </GridContainer>
                          )
                        },
                        {
                          tabButton: "Check out",
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={12} md={8}>
                              <CustomInput
                                  inputProps={{
                                    onChange: (e) => console.log(e.target.value)
                                  }}
                                  labelText="Card Holders Name"
                                  id="cardHolderName"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                />
                                <StripeProvider apiKey={"pk_test_K8n65a8M9t8H5YGy7klWTsDs"}>
                                  <Elements>
                                    <BillingForm price={10}/>
                                  </Elements>
                                </StripeProvider>
                              </GridItem>
                            </GridContainer>
                          )
                        }
                      ]}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                    <Button
                      onClick={(e) => this.setState({ activeTab: this.state.activeTab < 2 ? this.state.activeTab + 1 : 0 })}>
                      next
                 </Button>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
