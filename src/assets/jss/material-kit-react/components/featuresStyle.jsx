import {
  container,
  mlAuto,
  mrAuto,
  title,
  description
} from "assets/jss/material-kit-react.jsx";

const features = theme => ({
  container,
  mlAuto,
  mrAuto,
  title,
  description,
  features: {
    textAlign: "center",
    "& h5$description": {
      textAlign: "justify",
      marginBottom: "80px",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "15px",
        paddingRight: "15px"
      }
    }
  },
  features1: {
    textAlign: "center",
    padding: "10px 0"
  },
  features2: {
    padding: "80px 0"
  },
  features3: {
    padding: "80px 0",
    "& $phoneContainer": {
      maxWidth: "220px",
      margin: "0 auto"
    }
  },
  features4: {
    padding: "80px 0",
    "& $phoneContainer": {
      maxWidth: "260px",
      margin: "60px auto 0"
    }
  },
  features5: {
    padding: "80px 0",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    position: "relative",
    "& $title": {
      marginBottom: "30px"
    },
    "& $title,& $container": {
      position: "relative",
      zIndex: "2",
      color: "#FFFFFF"
    },
    "&:after": {
      background: "rgba(0,0,0,0.55)",
      position: "absolute",
      width: "100%",
      height: "100%",
      content: "''",
      zIndex: "0",
      left: "0px",
      top: "0px"
    },
    "& $container": {
      "& $gridContainer:last-child": {
        "& $gridItem": {
          borderBottom: "0"
        }
      },
      "& $gridItem": {
        border: "1px solid rgba(255, 255, 255, 0.35)",
        borderTop: "0",
        borderLeft: "0",
        "&:last-child": {
          borderRight: "0"
        }
      }
    },
    "& $infoArea5": {
      textAlign: "center",
      maxWidth: "310px",
      minHeight: "320px",
      "& h4,& p,& svg,& .fab,& .fas,& .far,& .fal,& .material-icons": {
        color: "#FFFFFF"
      }
    }
  },
  gridContainer: {},
  gridItem: {},
  textCenter: {
    textAlign: "center"
  },
  phoneContainer: {
    "& img": {
      width: "100%"
    }
  },
  listContainer: {
    textAlign: "center",
    display: "inline-block"
  },
  infoArea: {
    maxWidth: "none",
    margin: "0 auto",
    padding: "10px 0 0px"
  },
  infoArea5: {},
  boldText: {
    fontWeight: "bold"
  }
});

export default features;