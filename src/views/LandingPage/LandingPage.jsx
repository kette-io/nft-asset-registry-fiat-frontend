import React from "react";

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
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";


class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="dark"
          brand="KETTE asset registry"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <Parallax filter image={require("assets/img/bike-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>KETTE bicycle registry.</h1>
                <h4>
                  KETTE is the <strong> global decentralized asset registry</strong>.
                  Register your bike. From now on you can always proof
                  that you are the owner of your most valuable asset.
                </h4>
                <br />
                <Link to={"/register-page"} className={classes.link}>
                  <Button color="danger" size="lg" round>
                    Register now.
                </Button>
                </Link>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
