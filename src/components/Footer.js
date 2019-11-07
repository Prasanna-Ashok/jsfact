import React, { Component } from 'react';
import background from '../images/footer_background.png';
import '../styles/main_styles.css';

class Footer extends Component {
  render() {
    return (
      <div>
      <footer className="footer">
		<div className="footer_background" style={{backgroundImage: `url(${background})`}}></div>
		<div className="container">
			<div className="row footer_row">
				<div className="col">
					<div className="footer_content">
						<div className="row">

							<div className="col-lg-6 footer_col">
			
								<div className="footer_section footer_about">
									<div className="footer_logo_container">
										<a href="#">
											<div className="footer_logo_text">JS<span>Factory</span></div>
										</a>
									</div>
									<div className="footer_about_text">
										<p>We Make <span>JavaScript Experts</span> from Fresh Talents</p>
									</div>
									<div className="footer_social">
										<ul>
											<li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
											<li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
											<li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
										</ul>
									</div>
								</div>
								
							</div>

							<div className="col-lg-6 footer_col">
								<div className="footer_section footer_contact">
									<div className="footer_title">Contact Us</div>
									<div className="footer_contact_info">
										<ul>
											<li>Email: vilvaathiban@gmail.com</li>
											<li>Phone: +91-7200634990 </li>
											<li>Marathahalli</li>
										</ul>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>

      </div>
	);
  }
}

export default Footer;