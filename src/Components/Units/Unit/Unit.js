import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import randomColor from 'randomcolor';
var color = randomColor;
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 345,
  },


  avatar: {
    backgroundColor: color,
  },
  cardfooter: {
    justifyContent: 'space-around',
  },
}));
const Unit = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.name[0]}
          </Avatar>
        }
        title={props.name}
        subheader={props.code}
      />
      <CardContent>
      </CardContent>
      <CardActions className={classes.cardfooter}>
        <IconButton aria-label="add to favorites" onClick={() => console.log("Heart button Clicked")}>
          <FavoriteIcon />
        </IconButton>
        <Button variant="contained" color="secondary" onClick={() => console.log("newsButton clicked")}>
            See News
        </Button>
      </CardActions>
    </Card>
  );
}

export default Unit;