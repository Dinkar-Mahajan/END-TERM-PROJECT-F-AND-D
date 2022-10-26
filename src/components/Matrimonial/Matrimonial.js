import React from 'react';
import { grey100 } from 'material-ui/styles/colors';

class MatrimonialForm extends React.Component {

	state = {
		reg_number: '',
		first_name: '',
		last_name: '',
		email: '',
		contact_no: '',
		age: '',
		dob: '',
		height: '',
		sex: '',
		caste: '',
		sub_caste: '',
		gothra: '',
		star: '',
		rashi: '',
		address: '',
		district: '',
		state: '',
		country: '',
		marital_status: '',
		profile_created_by: '',
		education: '',
		occupation: '',
		occupation_descr: '',
		annual_income: '',
		mother_tounge: '',
		fathers_name: '',
		fathers_occupation: '',
		mothers_name: '',
		mothers_occupation: '',
		no_brothers: '',
		no_sisters: '',
		about_me: '',
		hobbies: '',
		blood_group: '',
		diet: '',
		smoke: '',
		drink: '',
		profile_creation_date: ''
	}

	change = e => {
		console.log("Invoked")
		this.setState({
			[e.target.name]: [e.target.value]
		});
	};

	send = e => {
		e.preventDefault();
		console.log(this.state);
	}

	divStyle = {
		backgroundColor: "#D3D3D3",
		height: 40 + "px",
		padding: 10 + "px",
		color: "black"
	}

	radioStyle1 = {
		marginLeft: 1,
		marginTop: 2
	}

	radioStyle2 = {
		marginLeft: -202,
		marginTop: 2,
		marginBottom: 50 + "px"
	}

	render() {
		return (
			<div>
				<div>
					<h4>REGISTRATION :</h4>
					{/* <h6>(All fields are mandatory)</h6><br /> */}
					<div class="row">
						<form class="col s11">
							<div class="row" style={{ marginLeft: 100 }}>
								<div class="input-field col s2">
									<input type="text" name="reg_number" id="RegNumber" onChange={e => this.change(e)} />
									<label for="RegNumber">Registration Number : </label>
								</div>
								<div class="input-field col s12">
									<div class="personalinfo" style={this.divStyle}>Personal Details</div>
								</div>
								<div class="input-field col s4">
									<textarea id="icon_prefix" maxLength="10" class="materialize-textarea" name="first_name" required onChange={e => this.change(e)}></textarea>
									<label for="icon_prefix">First Name</label>
								</div>
								<div class="input-field col s4">
									<textarea id="icon_prefix" maxLength="10" class="materialize-textarea" name="last_name" required onChange={e => this.change(e)}></textarea>
									<label for="icon_prefix">Last Name</label>
								</div>
								<div class="input-field col s4">
									<input type="email" name="email" required onChange={e => this.change(e)} />
									<label for="icon_prefix" maxLength="30">E-Mail</label>
								</div>
								<div class="input-field col s5">
									<input type="text" name="contact_no" minLength="10" maxLength="10" pattern="[0-9]+" required onChange={e => this.change(e)} />
									<label>Contact</label>
								</div>
								<div class="input-field col s1">
									<input type="text" name="age" maxLength="2" pattern="[0-9]+" required onChange={e => this.change(e)} />
									<label>Age</label>
								</div>
								<div class="input-field col s3">
									<input type="date" name="dob" required onChange={e => this.change(e)} />
									<label>Date Of Birth</label>
								</div>
								<div class="input-field col s3">
									<input type="text" name="height" maxLength="6" required onChange={e => this.change(e)} />
									<label>Height(in feet' inches")</label>
								</div>
								<div class="input-field col s5">
									<div class="input-field col s1">
										<label>Sex</label>
									</div>
									<div class="input-field col s2">
										<label for="M"><input name="sex" type="radio" id="M" value="Male" required onClick={e => this.change(e)} /><span style={{ marginLeft: 18 }}>Male</span></label>
									</div>
									<div class="input-field col s1">
										<label for="F"><input name="sex" type="radio" id="F" value="Female" required onClick={e => this.change(e)} /><span style={{ marginLeft: 16 }}>Female</span></label>
									</div>
								</div>
								<div class="input-field col s7">
									<div class="input-field col s1">
										<label>Diet</label>
									</div>
									<div class="input-field col s2">
										<label for="Veg"><input name="diet" type="radio" id="Veg" value="Vegetarian" required onClick={e => this.change(e)} /><span style={{ marginTop: -1 }}>Vegetarian</span></label>
									</div>
									<div class="input-field col s3" style={{ marginLeft: 20 }}>
										<label for="NVeg"><input name="diet" type="radio" id="NVeg" value="Non-Vegetarian" required onClick={e => this.change(e)} /><span style={{ marginTop: -1 }}>Non-Vegetarian</span></label>
									</div>
									<div class="input-field col s3">
										<label for="Egg"><input name="diet" type="radio" id="Egg" value="Eggetarian" required onClick={e => this.change(e)} /><span style={{ marginTop: -1 }}>Eggetarian</span></label>
									</div>
								</div>
								<div class="input-field col s7" style={this.radioStyle1}>
									<div class="input-field col s1">
										<label>Smoke</label>
									</div>
									<div class="input-field col s1">
										<label for="Smoke"><input name="smoke" type="radio" id="Smoke" value="Yes" required onClick={e => this.change(e)} /><span style={{ marginTop: -1 }}>Yes</span></label>
									</div>
									<div class="input-field col s2" style={{ marginLeft: 20 }}>
										<label for="Smoke"><input name="smoke" type="radio" id="Smoke" value="No" required onClick={e => this.change(e)} /><span style={{ marginTop: -1 }}>No</span></label>
									</div>
								</div>
								<div class="input-field col s5" style={this.radioStyle2}>
									<div class="input-field col s2">
										<label>Drink</label>
									</div>
									<div class="input-field col s2">
										<label for="Drink"><input name="drink" type="radio" id="Drink" value="Yes" style={{ marginTop: -95 }} required onClick={e => this.change(e)} /><span style={{ marginLeft: -25 }}>Yes</span></label>
									</div>
									<div class="input-field col s2" style={{ marginLeft: 20 }}>
										<label for="Drink"><input name="drink" type="radio" id="Drink" value="No" required onClick={e => this.change(e)} /><span style={{ marginLeft: 10 }}>No</span></label>
									</div>
								</div>
								<div class="input-field col s8">
									<input type="text" name="about_me" maxLength="50" required onChange={e => this.change(e)} />
									<label>About Me</label>
								</div>
								<div class="input-field col s4">
									<input type="text" name="hobbies" maxLength="50" required onChange={e => this.change(e)} />
									<label>Hobbies</label>
								</div>
								<div class="input-field col s2">
									<input type="text" name="blood_group" maxLength="10" required onChange={e => this.change(e)} />
									<label>Blood Group</label>
								</div>
								<div class="input-field col s2">
									<input type="text" name="marital_status" maxLength="20" required onChange={e => this.change(e)} />
									<label>Marital Status</label>
								</div>
								<div class="input-field col s12">
									<div class="personalinfo" style={this.divStyle}>Horoscope Information</div>
								</div>
								<div class="input-field col s4">
									<input type="text" name="caste" maxLength="20" required onChange={e => this.change(e)} />
									<label>Caste</label>
								</div>
								<div class="input-field col s4">
									<input type="text" name="sub_caste" maxLength="20" required onChange={e => this.change(e)} />
									<label>SubCaste</label>
								</div>
								<div class="input-field col s4">
									<input type="text" name="gothra" maxLength="20" required onChange={e => this.change(e)} />
									<label>Gothra</label>
								</div>
								<div class="input-field col s4">
									<input type="text" name="star" maxLength="20" required onChange={e => this.change(e)} />
									<label>Star</label>
								</div>
								<div class="input-field col s4">
									<input type="text" name="rashi" maxLength="20" required onChange={e => this.change(e)} />
									<label>Rashi</label>
								</div>
								<div class="input-field col s12">
									<div class="personalinfo" style={this.divStyle}>Address</div>
		                        </div>
								<div class="input-field col s12">
									<input type="text" name="address" maxLength="30" required onChange={e => this.change(e)} />
									<label>Address</label>
								</div>
								<div class="input-field col s4">
									<input type="text" name="district" maxLength="20" required onChange={e => this.change(e)} />
									<label>District</label>
								</div>
								<div class="input-field col s4">
									<input type="text" name="state" maxLength="20" required onChange={e => this.change(e)} />
									<label>State</label>
								</div>
								<div class="input-field col s4">
									<input type="text" name="country" maxLength="20" required onChange={e => this.change(e)} />
									<label>Country</label>
								</div>
								<div class="input-field col s12">
									<div class="personalinfo" style={this.divStyle}>Educational / Professional Details</div>
								</div>
								<div class="input-field col s3">
									<input type="text" name="education" maxLength="30" required onChange={e => this.change(e)} />
									<label>Education</label>
								</div>
								<div class="input-field col s3">
									<input type="text" name="occupation" maxLength="30" required onChange={e => this.change(e)} />
									<label>Occupation</label>
								</div>
								<div class="input-field col s6">
									<input type="text" name="occupation_descr" maxLength="50" required onChange={e => this.change(e)} />
									<label>Occupation Description</label>
								</div>
								<div class="input-field col s3">
									<input type="text" name="annual_income" maxLength="20" pattern="[0-9]+" required onChange={e => this.change(e)} />
									<label>Annual Income</label>
								</div>
								<div class="input-field col s3">
									<input type="text" name="mother_tounge" maxLength="20" required onChange={e => this.change(e)} />
									<label>Mother Tounge</label>
								</div>
								<div class="input-field col s12">
									<div class="personalinfo" style={this.divStyle}>Family Details</div>
								</div>
								<div class="input-field col s6">
									<input type="text" name="fathers_name" maxLength="20" required onChange={e => this.change(e)} />
									<label>Father's Name</label>
								</div>
								<div class="input-field col s6">
									<input type="text" name="fathers_occupation" maxLength="20" required onChange={e => this.change(e)} />
									<label>Father's Occupation</label>
								</div>
								<div class="input-field col s6">
									<input type="text" name="mothers_name" maxLength="20" required onChange={e => this.change(e)} />
									<label>Mother's Name</label>
								</div>
								<div class="input-field col s6">
									<input type="text" name="mothers_occupation" maxLength="20" required onChange={e => this.change(e)} />
									<label>Mother's Occupation</label>
								</div>
								<div class="input-field col s6">
									<input type="text" name="no_brothers" maxLength="2" minLength="1" pattern="[0-9]+" required onChange={e => this.change(e)} />
									<label>Number of Brothers</label>
								</div>
								<div class="input-field col s6">
									<input type="text" name="no_sisters" maxLength="2" minLength="1" pattern="[0-9]+" required onChange={e => this.change(e)} />
									<label>Number of Sisters</label>
								</div>
								<div class="input-field col s3"></div>
								<div class="input-field col s12">
									<div class="personalinfo" style={this.divStyle}>Profile creation Details</div>
								</div>
								<div class="input-field col s3">
									<input type="text" name="profile_created_by" maxLength="20" required onChange={e => this.change(e)} />
									<label>Profile created by</label>
								</div>
								<div class="input-field col s3">
									<input type="date" name="profile_creation_date" required onChange={e => this.change(e)} />
									<label>Profle Creation Date</label>
								</div>
								<div class="input-field col s12">
									<button class="btn waves-effect waves-light" type="submit" onClick={e => { this.send(e) }}>Submit<i class="material-icons right">send</i>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default MatrimonialForm;
