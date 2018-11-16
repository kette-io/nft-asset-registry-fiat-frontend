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
import Icon from '@material-ui/core/Icon';
import classNames from "classnames";

// @material-ui/icons
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DescriptionIcon from "@material-ui/icons/Description";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import SecurityIcon from "@material-ui/icons/Security";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import HealingIcon from "@material-ui/icons/Healing";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import { loadCSS } from 'fg-loadcss/src/loadCSS';


import featuresStyle from "assets/jss/material-kit-react/components/featuresStyle.jsx";

const BicycleIcon = (props) => {
  const { className } = props;
  return (<i className={`${className} fas fa-bicycle`} ></i>)
};

const DesktopIcon = (props) => {
  const { className } = props;
  return (<i className={`${className} fas fa-desktop`} ></i>)
};

const CubesIcon = (props) => {
  const { className } = props;
  return (<i className={`${className} fas fa-cubes`} ></i>)
};

class Features extends React.Component {

  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss'),
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.features}>
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
                icon={SecurityIcon}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Never Search Again"
                description="All important documents for your bike in one place (warranty, invoice)."
                icon={HourglassEmptyIcon}
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
        <div className={classes.features2}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2 className={classes.title}>How does Velochain work?</h2>
            </GridItem>
          </GridContainer>
          <div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                  title="1. Prepare your frame number"
                  description="Keep your frame number and documents such as invoices ready."
                  icon={BicycleIcon}
                  iconColor="info"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                  title="2. Register directly via the app"
                  description="All important documents for your bike in one place (warranty, invoice)."
                  icon={DesktopIcon}
                  iconColor="success"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                  title="3. Received digital bike pass"
                  description="The decentralized database and blockchain technology helps to store all data consistently and allows a quick access of the bike owner."
                  icon={CubesIcon}
                  iconColor="danger"
                  vertical
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(featuresStyle)(Features);
