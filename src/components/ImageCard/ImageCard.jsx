import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    minWidth: 300
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

function ImgMediaCard(props) {
  const { classes, uniqueId, description, imagePath } = props;
  return (
    <Card className={classes.card}>
        <CardMedia
          component="img"
          className={classes.media}
          height="240"
          src={imagePath}
        />
        <CardContent>
          <Typography gutterBottom variant="title" component="h2">
            {uniqueId}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
        </CardContent>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);