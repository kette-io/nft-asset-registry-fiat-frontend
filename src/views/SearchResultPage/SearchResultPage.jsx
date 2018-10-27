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
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";


class SearchResultPage extends React.Component {
  render() {
    console.log(this.props.location.result)
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="dark"
          brand="KETTE asset registry"
          {...rest}
        />
        <Parallax filter image={require("assets/img/bike-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Much result..</h1>
                <h4>
                  Very wow
                </h4>
                <br />
                <Link to={"/register-page"} className={classes.link}>
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

export default withStyles(landingPageStyle)(SearchResultPage);
