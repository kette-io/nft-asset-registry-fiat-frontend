/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Search from "@material-ui/icons/Search";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>
          Homepage
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/register-page" className={classes.navLink}>
          Register
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/all-components" className={classes.navLink}>
          Templates
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomInput
          white
          inputRootCustomClasses={classes.inputRootCustomClasses}
          formControlProps={{
            className: classes.formControl
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search",
              className: classes.searchInput
            }
          }}
        />
        <Button justIcon round color="white"
          onClick={(e) => console.log("search clicked")}>
          <Search className={classes.searchIcon} />
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
