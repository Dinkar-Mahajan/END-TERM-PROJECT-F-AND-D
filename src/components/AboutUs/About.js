import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
class AboutUs extends React.Component {
    render() {
        return (

            <div class="Main">
                <div class="Advertisements">
                    <img src="images/image1.jpg" alt="Image Unavailable" class="ad1" />
                    <img src="images/image2.jpg" alt="Image Unavailable" class="ad2" />
                    <img src="images/image3.jpg" alt="Image Unavailable" class="ad3" />
                    <img src="images/image4.jpg" alt="Image Unavailable" class="ad4" />
                </div>

                <div class="Main-Content">

                    <p class="card-text">The idea of forming an association for the welfare of community member was proposed by </p>
                    <p> <strong>Shri S Raja Rao  , N G Vasudev Moorthy , S Ramakrishna ,Dr. K . Raghunath Rao, SriPrakash N,
                        K Ramachandra Rao </strong> </p>

                    <p>and  others  at a meeting in Kolar in early 2003.
                        In  order to carry  forward this proposal,</p>

                    <p>a meeting was convened in May 2003 on the auspicious day of <strong>“Akshaya Thritiya “</strong> </p>
                    <p>Jayanagar 4th T Block, Bangalore, which was attended by about 150 members.</p>
                    <p>It was in this meeting that the name of the sangha  </p>
                    <p><b>‘MATRIMONIAL SABHA “</b> </p>
                    <p>was proposed and accepted by the members unanimously.</p>

                </div>
            </div>
            
        )
    }
}
export default AboutUs;

