import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<div class="Main">
				<div class="Advertisements">
					<img src="images/image1.jpg" alt="Image Unavailable" class="ad1" />
					<img src="images/image2.jpg" alt="Image Unavailable" class="ad2" />
					<img src="images/image3.jpg" alt="Image Unavailable" class="ad3" />
					<img src="images/image4.jpg" alt="Image Unavailable" class="ad4" />
				</div>
				<div>
					<h4><b>“Marriages are made in heaven but we solemnize them at Matrimonial Website.”</b></h4>
					<br></br>
					<h5><b>Matrimonial Website is an online marriage bureau in Kapurthala, dedicated to help people, meet their life partners for marriage in a comfortable environment. We provide complete and wide-ranging listing of Indian matrimonial profiles for people seeking their soul mates.</b></h5>
					<h4>Steps of working of this Website.</h4>
					<p align="center"><b>
						1.) Registration will be done through the register column.<br></br>
						2.) Name will be reflected in the list of registered members.<br></br>
						3.) Committee members will find the perfect match/matches from the data of registered members.<br></br>
						4.) No personal data of registered members will be shown to maintain privacy.<br></br>
						5.) Catalouge of the matched persons will be sent to the registered email id.</b>
					</p>
				</div>
			</div>
		);
	}
}
export default Home;
