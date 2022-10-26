import React from 'react';
class Navigation extends React.Component{
    render() {
		return (
			<div>
				<div class="row">
					<div class="col-md-3">
						<img class="kalash" src="images/Kalash.jpg" alt="Image Unavailable" />
					</div>
					<div class="col-md-6">
						<h3><b>Matrimonial Website</b></h3>
					</div>
				</div>
					<nav class="navbar bg-primary navbar-default">
					<div class="container-fluid">
						<ul class="nav navbar-nav">
							<li><a href="/"><b>Home</b></a></li>
							<li><a href="/matrimonial"><b>Register</b></a></li>
							<li><a href="/contact"><b>Members Registered</b></a></li>
							{/* <li><a href="/Gallery"><b>Gallery</b></a></li> */}
							
							{/* <li><a href="/AimsObjectives">Aims and Objectives</a></li> */}
							{/* <li><a href="/events">Events & activities</a></li> */}
							<li><a href="/memberDetails"><b>Committee Members</b></a></li>
							
							<li><a href="/about"><b>About Us</b></a></li>
							<li><a href="/contactUs"><b>Contact Us</b></a></li>
						</ul>
						<ul class="nav navbar-nav navbar-right">
							<li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
							<li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
						</ul>
					</div>
				</nav>
                </div>
        )
    }
}
export default Navigation;
