import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import ImgMediaCard from "components/ImageCard/ImageCard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

class SearchResultPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    if (!this.props.location.result) {
      return (
        <div>
        <Header
          color="dark"
          brand="KETTE asset registry"
          {...rest}
        />
        <div className={classes.main}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={3}>
            <ImgMediaCard uniqueId="MonkeySeeMonkeyDo" imagePath={"https://cdn.vox-cdn.com/thumbor/Or0rhkc1ciDqjrKv73IEXGHtna0=/0x0:666x444/1200x800/filters:focal(273x193:379x299)/cdn.vox-cdn.com/uploads/chorus_image/image/59384673/Macaca_nigra_self-portrait__rotated_and_cropped_.0.jpg"} description="ipasdasknd a,ln dlkasjd lkasjd lkasjdlkasj"></ImgMediaCard>
            </GridItem>
          </GridContainer>
        </div>
        <Footer />
      </div >)
    }

    let content;
    if (this.props.location.result.notFound) {
      content = <ImgMediaCard uniqueId={this.props.location.result.uniqueId} imagePath={"https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png"} description="not found"></ImgMediaCard>
    } else {
      const { ipfsImageHash, uniqueId, description } = this.props.location.result;
      const imagePath = `https://ipfs.io/ipfs/${ipfsImageHash}`;
      content = <ImgMediaCard uniqueId={uniqueId} imagePath={imagePath} description={description}></ImgMediaCard>
    }

    return (
      <div>
        <Header
          color="dark"
          brand="KETTE asset registry"
          {...rest}
        />
        <div className={classes.main}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={3}>
              {content}
            </GridItem>
          </GridContainer>
        </div>
        <Footer />
      </div >
    );
  }
}

export default withStyles(landingPageStyle)(SearchResultPage);
