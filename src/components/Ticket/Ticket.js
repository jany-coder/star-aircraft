import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, Router, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Ticket = (props) => {

    const { img, destination, seatType, price } = props.data;

    const classes = useStyles();
    const history = useHistory();

    const handleProceedCheckout = () => {
            history.push('/login');
    }
    return (
        <section>
            <div>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={img}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                <span style={{ color: "tomato", fontSize: "20px", fontWeight: 700 }}>{destination} </span>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <span style={{ color: "#603bbb", fontSize: "20px", fontWeight: 700 }}>{seatType}</span> <br />
                                <span style={{ color: "#603bbb", fontSize: "18px", fontWeight: 500 }}>{price} BDT</span>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>

                        <Button onClick={handleProceedCheckout} variant="contained" color="primary">
                            Book Now
                        </Button>

                    </CardActions>
                </Card>
            </div>
        </section>
    );
};

export default Ticket;
