import React from "react";
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Features from "components/Features/Features.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header 
          color="transparent"
          brand="KETTE bicycle registry"
          fixed
          changeColorOnScroll={{
            height: 300,
            color: "dark"
          }}
          {...rest} 
        />
        <Parallax
          filter
          image={require("assets/img/bg-1-default.jpg")}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>KETTE bicycle registry.</h1>
                <h4>
                  KETTE is the {" "}
                  <strong> global decentralized bicycle registry</strong>.
                  Register your bike. From now on you can always proof that you
                  are the owner of your most valuable asset.
                </h4>
                <br />
                <Link to={"/register-page"} className={classes.link}>
                  <Button color="danger" size="lg" round target="_blank"
                  rel="noopener noreferrer">
                    <i class="fas fa-arrow-circle-right"></i>Register now.
                  </Button>
                </Link>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Features divId="services" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
