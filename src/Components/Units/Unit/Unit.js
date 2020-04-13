import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 345,
    float: 'left',
    margin: '3em'
  },


  avatar: {
    backgroundColor: red[500],
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
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => console.log("Heart button Clicked")}>
          <FavoriteIcon />
        </IconButton>
        <Button variant="contained" color="secondary" className="shownews" onClick={() => console.log("newsButton clicked")}>
            See News
        </Button>
      </CardActions>
    </Card>
  );
}

export default Unit;