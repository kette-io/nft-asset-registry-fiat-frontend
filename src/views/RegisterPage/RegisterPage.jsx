import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import NavPills from "components/NavPills/NavPills.jsx";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import registerPageStyle from "assets/jss/material-kit-react/views/registerPage.jsx";
import ethUtil from "ethereumjs-util";

import TextField from '@material-ui/core/TextField';
import { CardElement, injectStripe } from "react-stripe-elements";
import InputAdornment from '@material-ui/core/InputAdornment';

import registrationService from 'services/registrationService.js'
import ipfsService from 'services/ipfsService.js'
import priceService from 'services/priceService.js'


class RegisterPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      image: '',
      activeTab: 0,
      description: '',
      uniqueId: '',
      ethereumAddress: '',
      cardHolderName: '',
      ketteSecret: '',
      price: 'loading'
    }
  }

  async register() {

    const ipfsHash = await ipfsService(this.state.imageBuffer);

    try {
      const txHash = await registrationService(
        ipfsHash,
        this.state.description,
        this.state.uniqueId,
        this.state.ethereumAddress,
        this.state.stripeToken.id,
        this.state.ketteSecret
      )

      console.log(txHash);
    } catch (err) {
      console.log(err)
    }
  }

  validate() {
    if (this.state.activeTab === 0) {
      return this.state.description !== "" &&
        this.state.description.length < 50 &&
        this.state.uniqueId !== "" &&
        this.state.imageBuffer
    } else if (this.state.activeTab === 1) {
      return ethUtil.isValidAddress(this.state.ethereumAddress);
    } else if (this.state.activeTab === 2) {
      return this.state.cardHolderName !== "" &&
        this.state.cardComplete
    }
  }

  async componentDidMount() {
    const price = await priceService();
    this.setState({ price: Math.round(price * 100) / 100 })
  }

  async onNextClicked(event) {
    if (this.state.activeTab === 0) {
      this.setState({ activeTab: 1 })
    }
    else if (this.state.activeTab === 1) {
      this.setState({ activeTab: 2 })
    } else if (this.state.activeTab === 2) {
      const { token } = await this.props.stripe.createToken({ name: this.state.cardHolderName });
      this.setState({ stripeToken: token })
      await this.register();
    }
    window.scrollTo(0, 0)
  }

  onPreviousClicked(event) {
    if (this.state.activeTab === 2) {
      this.setState({ activeTab: 1 })
    } else if (this.state.activeTab === 1) {
      this.setState({ activeTab: 0 })
    }

  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

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
    return (
      <div>
        <Header
          color="white"
          brand="KETTE bicycle registry"
          {...rest}
        />
          <div className={classes.main}>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                    <NavPills
                      active={this.state.activeTab}
                      color="danger"
                      alignCenter
                      tabs={[
                        {
                          tabButton: "Bike information",
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={12} md={10}>
                                <TextField
                                  label="Frame Number"
                                  className={classes.textField}
                                  value={this.state.uniqueId}
                                  fullWidth
                                  onChange={this.handleChange('uniqueId')}
                                  margin="normal"
                                  variant="outlined"
                                />
                                <TextField
                                  label="Description"
                                  className={classes.textField}
                                  value={this.state.description}
                                  fullWidth
                                  onChange={this.handleChange('description')}
                                  margin="normal"
                                  variant="outlined"
                                />
                                <h4 align="left">Image</h4>
                                <div align="left">
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
                              <GridItem xs={12} sm={12} md={10}>
                                <TextField
                                  label="Ethereum Address"
                                  className={classes.textField}
                                  value={this.state.ethereumAddress}
                                  fullWidth
                                  onChange={this.handleChange('ethereumAddress')}
                                  margin="normal"
                                  variant="outlined"
                                />
                              </GridItem>
                            </GridContainer>
                          )
                        },
                        {
                          tabButton: "Check out",
                          tabContent: (
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={12} md={10}>
                                <TextField
                                  label="Card holder's name"
                                  className={classes.textField}
                                  value={this.state.cardHolderName}
                                  fullWidth
                                  onChange={this.handleChange('cardHolderName')}
                                  margin="normal"
                                  variant="outlined"
                                />
                                <div style={{ padding: '15px', border: '1px solid darkgrey', borderRadius: '3px' }}>
                                  <CardElement
                                    onChange={(e) => this.setState({ cardComplete: e.complete })}
                                    style={{
                                      base: {
                                        fontSize: '18px',
                                      }
                                    }}
                                  /></div>
                                <TextField
                                  id="filled-adornment-amount"
                                  className={classNames(classes.margin, classes.textField)}
                                  variant="filled"
                                  margin="normal"
                                  label="Price"
                                  value={this.state.price}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment variant="filled" position="start">
                                        €
                                      </InputAdornment>
                                    ),
                                    readOnly: true
                                  }}
                                />
                                <TextField
                                  label="temporary secret"
                                  className={classes.textField}
                                  value={this.state.ketteSecret}
                                  fullWidth
                                  onChange={this.handleChange('ketteSecret')}
                                  margin="normal"
                                  variant="outlined"
                                />

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
                      onClick={this.onPreviousClicked.bind(this)}
                      color="danger"
                    >
                      prev.
                   </Button>
                    <Button
                      onClick={this.onNextClicked.bind(this)}
                      color="danger"
                      disabled={!this.validate()}
                    >
                      next
                  </Button>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
        <Footer />
      </div>
    );
  }
}

export default injectStripe(withStyles(registerPageStyle)(RegisterPage));
