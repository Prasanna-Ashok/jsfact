import React from 'react';
import {withRouter} from 'react-router-dom';
import background from '../images/courses_background.jpg';
import video from '../images/video.jpg';
import '../styles/about.css';
import '../styles/about_responsive.css';
import '../styles/main_styles.css';
import about1 from "../images/about_1.jpg";
import about2 from "../images/about_2.jpg";
import about3 from "../images/about_3.jpg";
import vilva from '../images/vilva.png';
import prasanna from '../images/prasanna.png';
import sadiq from '../images/sadiq.png';


class About extends React.Component{
    render(){
        return(
            <div>
            <div className="about">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="section_title_container text-center">
						<h2 className="section_title">Welcome To JSFactory</h2>
						<div className="section_subtitle"><h3>We make Javascript experts from fresh talents</h3></div>
					</div>
				</div>
			</div>
			<div className="row about_row">
				
				<div className="col-lg-4 about_col about_col_left">
					<div className="about_item">
						<div className="about_item_image"><img src={about1} alt=""/></div>
						<div className="about_item_title"><a href="#">Our Stories</a></div>
						<div className="about_item_text">
							<p>Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim en consectet adipisi elit, sed do consectet adipisi elit, sed doadesg.</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 about_col about_col_middle">
					<div className="about_item">
						<div className="about_item_image"><img src={about2} alt=""/></div>
						<div className="about_item_title"><a href="#">Our Mission</a></div>
						<div className="about_item_text">
							<p>Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim en consectet adipisi elit, sed do consectet adipisi elit, sed doadesg.</p>
						</div>
					</div>
				</div>

				<div className="col-lg-4 about_col about_col_right">
					<div className="about_item">
						<div className="about_item_image"><img src={about3} alt=""/></div>
						<div className="about_item_title"><a href="#">Our Vision</a></div>
						<div className="about_item_text">
							<p>Lorem ipsum dolor sit , consectet adipisi elit, sed do eiusmod tempor for enim en consectet adipisi elit, sed do consectet adipisi elit, sed doadesg.</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
	<div className="feature">
		<div className="feature_background" style={{backgroundImage: `url(${background})`}}></div>
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="section_title_container text-center">
						<h2 className="section_title">Why Choose Us</h2>
						<div className="section_subtitle"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</p></div>
					</div>
				</div>
			</div>
			<div className="row feature_row">
				<div className="col-lg-6 feature_col">
					<div className="feature_content">
						<div className="accordions">
							
							<div className="elements_accordions">

								<div className="accordion_container">
									<div className="accordion d-flex flex-row align-items-center"><div>Award for Best School 2017</div></div>
									<div className="accordion_panel">
										<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									</div>
								</div>

								<div className="accordion_container">
									<div className="accordion d-flex flex-row align-items-center active"><div>You’re learning from the best.</div></div>
									<div className="accordion_panel">
										<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									</div>
								</div>

								<div className="accordion_container">
									<div className="accordion d-flex flex-row align-items-center"><div>Our degrees are recognized worldwide.</div></div>
									<div className="accordion_panel">
										<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									</div>
								</div>

								<div className="accordion_container">
									<div className="accordion d-flex flex-row align-items-center"><div>We encourage our students to go global.</div></div>
									<div className="accordion_panel">
										<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
									</div>
								</div>

							</div>

						</div>
					</div>
				</div>

				<div className="col-lg-6 feature_col">
					<div className="feature_video d-flex flex-column align-items-center justify-content-center">
						<div className="feature_video_background" style={{backgroundImage: `url(${video})`}}></div>
						<a className="vimeo feature_video_button" href="https://player.vimeo.com/video/99340873?title=0" title="OH, PORTUGAL - IN 4K - Basti Hansen - Stock Footage">
							<img src="images/play.png" alt="" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div className="team">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="section_title_container text-center">
						<h2 className="section_title">The Best Tutors in Town</h2>
					</div>
				</div>
			</div>
			<div className="row team_row">
				
				<div className="col-lg-4 col-md-6 team_col">
					<div className="team_item">
						<div className="team_image"><img src={vilva} alt=""/></div>
						<div className="team_body">
							<div className="team_title"><a href="#">Vilva Athiban</a></div>
							<div className="team_subtitle">Senior React Js developer</div>
							
						</div>
					</div>
				</div>

				<div className="col-lg-4 col-md-6 team_col">
					<div className="team_item">
						<div className="team_image"><img src={sadiq} alt=""/></div>
						<div className="team_body">
							<div className="team_title"><a href="#">Mohammed Sadiq</a></div>
							<div className="team_subtitle">Senior Node Js developer</div>
							
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 team_col">
					<div className="team_item">
						<div className="team_image"><img src={prasanna} alt=""/></div>
						<div className="team_body">
							<div className="team_title"><a href="#">Prasanna Ashok</a></div>
							<div className="team_subtitle">Technical consultant</div>
							
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
            </div>
        );
    }
}

export default withRouter(About);