import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoArea from "components/InfoArea/InfoArea";

// @material-ui/icons
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DescriptionIcon from "@material-ui/icons/Description";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import SecurityIcon from "@material-ui/icons/Security";
import ExtensionIcon from "@material-ui/icons/Extension";
import HealingIcon from "@material-ui/icons/Healing";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";

import featuresStyle from "assets/jss/material-kit-react/components/featuresStyle.jsx";

class Features extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Why registering your bike?</h2>
            <h5 className={classes.description}>
              Especially high-quality bicycles and e-bikes are targets of organized procurement crime. But unlike cars or mopeds, there is no single registration or proof of ownership that can deter criminals from theft or help with the investigation. The average price of an e-bike or pedelec is up to twice as high as that of a classic bike.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Deter thieves!"
                description="Through clear labeling and assignability of bicycle and owner."
                icon={AssignmentIcon}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Never Search Again"
                description="All important documents for your bike in one place (warranty, invoice)."
                icon={TimelapseIcon}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Resale value"
                description="Increasing value through clear service and bicycle history"
                icon={DeviceHubIcon}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(featuresStyle)(Features);
