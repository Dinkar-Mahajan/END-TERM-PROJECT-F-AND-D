import React from'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from'@material-ui/core/CardActions';
import CardContent from'@material-ui/core/CardContent';
import CardMedia from'@material-ui/core/CardMedia';
import Button from'@material-ui/core/Button';
import Typography from'@material-ui/core/Typography';
import { makeStyles,Theme , createStyles} from'@material-ui/core/styles';
import memberDetail from'./memberDetail.json'
import Avatar from'@material-ui/core/Avatar';
 
export default function MediaCard(){
const useStyles = makeStyles((theme) =>
 
createStyles({
root: {
maxWidth:200,
maxHeight:230,
 
  },
avatar: {
    display:'flex',
    '& > *': {
    margin:theme.spacing(4),
    marginBottom:theme.spacing(2),
    },
  },
large: {
width:theme.spacing(14),
height:theme.spacing(14),
    },
  })
);
const leftRightMargin={
"margin-left":"0% !important",
"margin-top":"5%",
"margin-right":"0% !important",
"margin-bottom":"1%" 
}
const colWidth={
"width":"15%",
"margin-top":"1%"
}
const members=memberDetail;
const classes=useStyles();
return (
    <div className="row">
    {
        members.map(val=>{
        return(
            <div className="col s2"style={colWidth}>
            <Card className={classes.root}style={leftRightMargin}>
                <div className={classes.avatar}>
                <Avatar at="Remy Sharp" className={classes.large}/>
                </div>
                <CardActionArea className={classes.content}>
                    <CardContent className={classes.content}>
                        <Typography variant="body2" display="block" gutterBottom></Typography>
                        <Typography variant="body2" display="block" gutterBottom>{val.name}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>
            )
        })
    }
    </div>
  );
} 

