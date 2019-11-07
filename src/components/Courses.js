import React from 'react';
import '../styles/course.css';
import '../styles/course_responsive.css';
import '../styles/main_styles.css';
import { withRouter } from 'react-router-dom';
import teacher from '../images/teacher.jpg';
import course1 from '../images/course_image.jpg';
import {connect} from 'react-redux';
import queryString from 'query-string';
import {courseTypeThunk} from '../actions/courseType';

class Courses extends React.Component {
    componentDidMount(){
        let parsed = queryString.parse(this.props.location.search);
        console.log(parsed.type);
        this.props.dispatch(courseTypeThunk(parsed.type));
    }
    render() {
        if(this.props.courseTypeReducer.data){
        return (    
            <div className="course">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="course_container">
                                <div className="course_title">{this.props.courseTypeReducer.data.title}</div>
                                <div className="course_info d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                                    <div className="course_info_item">
                                        <div className="course_info_title">Teacher:</div>
                                        <div className="course_info_text"><a href="#">{this.props.courseTypeReducer.data.teacher}</a></div>
                                    </div>
                                    <div className="course_info_item">
                                        <div className="course_info_title">Reviews:</div>
                                        <div className="rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div>
                                    </div>

                                    <div className="course_info_item">
                                        <div className="course_info_title">Categories:</div>
                                        <div className="course_info_text"><a href="#">Languages</a></div>
                                    </div>

                                </div>

                                <div className="course_image"><img src={course1} alt="" /></div>

                                <div className="course_tabs_container">
                                    <div className="tabs d-flex flex-row align-items-center justify-content-start">
                                        <div className="tab active">description</div>
                                        <div className="tab">curriculum</div>
                                        <div className="tab">reviews</div>
                                    </div>
                                    <div className="tab_panels">

                                        <div className="tab_panel active">
                                            <div className="tab_panel_title">{this.props.courseTypeReducer.data.desc_title}</div>
                                            <div className="tab_panel_content">
                                                <div className="tab_panel_text">
                                                    <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosquad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non mauris vitae erat consequat auctor eu in elit. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Lorem Ipsn gravida nibh vel velit auctor aliquet. className aptent taciti sociosquad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                                </div>
                                                <div className="tab_panel_section">
                                                    <div className="tab_panel_subtitle">Requirements</div>
                                                    <ul className="tab_panel_bullets">
                                                        <li>Lorem Ipsn gravida nibh vel velit auctor aliquet. className aptent taciti sociosquad litora torquent.</li>
                                                        <li>Cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a.</li>
                                                        <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.</li>
                                                        <li>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</li>
                                                    </ul>
                                                </div>
                                                <div className="tab_panel_section">
                                                    <div className="tab_panel_subtitle">What is the target audience?</div>
                                                    <div className="tab_panel_text">
                                                        <p>This course is intended for anyone interested in learning to master his or her own body.This course is aimed at beginners, so no previous experience with hand balancing skillts is necessary Aenean viverra tincidunt nibh, in imperdiet nunc. Suspendisse eu ante pretium, consectetur leo at, congue quam. Nullam hendrerit porta ante vitae tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="tab_panel tab_panel_2">
                                            <div className="tab_panel_content">
                                                <div className="tab_panel_title">Software Training</div>
                                                <div className="tab_panel_content">
                                                    <div className="tab_panel_text">
                                                        <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                                                    </div>

                                                    <ul className="dropdowns">
                                                        <li className="has_children">
                                                            <div className="dropdown_item">
                                                                <div className="dropdown_item_title"><span>Lecture 1:</span> Lorem Ipsn gravida nibh vel velit auctor aliquet.</div>
                                                                <div className="dropdown_item_text">
                                                                    <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                                                                </div>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <div className="dropdown_item">
                                                                        <div className="dropdown_item_title"><span>Lecture 1.1:</span> Lorem Ipsn gravida nibh vel velit auctor aliquet.</div>
                                                                        <div className="dropdown_item_text">
                                                                            <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="dropdown_item">
                                                                        <div className="dropdown_item_title"><span>Lecture 1.2:</span> Lorem Ipsn gravida nibh vel velit auctor aliquet.</div>
                                                                        <div className="dropdown_item_text">
                                                                            <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li className="has_children">
                                                            <div className="dropdown_item">
                                                                <div className="dropdown_item_title"><span>Lecture 2:</span> Lorem Ipsn gravida nibh vel velit auctor aliquet.</div>
                                                                <div className="dropdown_item_text">
                                                                    <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                                                                </div>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <div className="dropdown_item">
                                                                        <div className="dropdown_item_title"><span>Lecture 2.1:</span> Lorem Ipsn gravida nibh vel velit auctor aliquet.</div>
                                                                        <div className="dropdown_item_text">
                                                                            <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="dropdown_item">
                                                                        <div className="dropdown_item_title"><span>Lecture 2.2:</span> Lorem Ipsn gravida nibh vel velit auctor aliquet.</div>
                                                                        <div className="dropdown_item_text">
                                                                            <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <div className="dropdown_item">
                                                                <div className="dropdown_item_title"><span>Lecture 3:</span> Lorem Ipsn gravida nibh vel velit auctor aliquet.</div>
                                                                <div className="dropdown_item_text">
                                                                    <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="dropdown_item">
                                                                <div className="dropdown_item_title"><span>Lecture 4:</span> Lorem Ipsn gravida nibh vel velit auctor aliquet.</div>
                                                                <div className="dropdown_item_text">
                                                                    <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="dropdown_item">
                                                                <div className="dropdown_item_title"><span>Lecture 5:</span> Lorem Ipsn gravida nibh vel velit auctor aliquet.</div>
                                                                <div className="dropdown_item_text">
                                                                    <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab_panel tab_panel_3">
                                            <div className="tab_panel_title">Course Review</div>

                                            <div className="review_rating_container">
                                                <div className="review_rating">
                                                    <div className="review_rating_num">4.5</div>
                                                    <div className="review_rating_stars">
                                                        <div className="rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div>
                                                    </div>
                                                    <div className="review_rating_text">(28 Ratings)</div>
                                                </div>
                                                <div className="review_rating_bars">
                                                    <ul>
                                                        <li><span>5 Star</span><div className="review_rating_bar"><div style={{ width: 90 }}></div></div></li>
                                                        <li><span>4 Star</span><div className="review_rating_bar"><div style={{ width: 75 }}></div></div></li>
                                                        <li><span>3 Star</span><div className="review_rating_bar"><div style={{ width: 32 }}></div></div></li>
                                                        <li><span>2 Star</span><div className="review_rating_bar"><div style={{ width: 10 }}></div></div></li>
                                                        <li><span>1 Star</span><div className="review_rating_bar"><div style={{ width: 3 }}></div></div></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="comments_container">
                                                <ul className="comments_list">
                                                    <li>
                                                        <div className="comment_item d-flex flex-row align-items-start jutify-content-start">
                                                            <div className="comment_image"><div><img src="images/comment_1.jpg" alt="" /></div></div>
                                                            <div className="comment_content">
                                                                <div className="comment_title_container d-flex flex-row align-items-center justify-content-start">
                                                                    <div className="comment_author"><a href="#">Milley Cyrus</a></div>
                                                                    <div className="comment_rating"><div className="rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div></div>
                                                                    <div className="comment_time ml-auto">1 day ago</div>
                                                                </div>
                                                                <div className="comment_text">
                                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some form, by injected humour.</p>
                                                                </div>
                                                                <div className="comment_extras d-flex flex-row align-items-center justify-content-start">
                                                                    <div className="comment_extra comment_likes"><a href="#"><i className="fa fa-heart" aria-hidden="true"></i><span>15</span></a></div>
                                                                    <div className="comment_extra comment_reply"><a href="#"><i className="fa fa-reply" aria-hidden="true"></i><span>Reply</span></a></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <div className="comment_item d-flex flex-row align-items-start jutify-content-start">
                                                                    <div className="comment_image"><div><img src="images/comment_2.jpg" alt="" /></div></div>
                                                                    <div className="comment_content">
                                                                        <div className="comment_title_container d-flex flex-row align-items-center justify-content-start">
                                                                            <div className="comment_author"><a href="#">John Tyler</a></div>
                                                                            <div className="comment_rating"><div className="rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div></div>
                                                                            <div className="comment_time ml-auto">1 day ago</div>
                                                                        </div>
                                                                        <div className="comment_text">
                                                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some form, by injected humour.</p>
                                                                        </div>
                                                                        <div className="comment_extras d-flex flex-row align-items-center justify-content-start">
                                                                            <div className="comment_extra comment_likes"><a href="#"><i className="fa fa-heart" aria-hidden="true"></i><span>15</span></a></div>
                                                                            <div className="comment_extra comment_reply"><a href="#"><i className="fa fa-reply" aria-hidden="true"></i><span>Reply</span></a></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <div className="comment_item d-flex flex-row align-items-start jutify-content-start">
                                                            <div className="comment_image"><div><img src="images/comment_3.jpg" alt="" /></div></div>
                                                            <div className="comment_content">
                                                                <div className="comment_title_container d-flex flex-row align-items-center justify-content-start">
                                                                    <div className="comment_author"><a href="#">Milley Cyrus</a></div>
                                                                    <div className="comment_rating"><div className="rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div></div>
                                                                    <div className="comment_time ml-auto">1 day ago</div>
                                                                </div>
                                                                <div className="comment_text">
                                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some form, by injected humour.</p>
                                                                </div>
                                                                <div className="comment_extras d-flex flex-row align-items-center justify-content-start">
                                                                    <div className="comment_extra comment_likes"><a href="#"><i className="fa fa-heart" aria-hidden="true"></i><span>15</span></a></div>
                                                                    <div className="comment_extra comment_reply"><a href="#"><i className="fa fa-reply" aria-hidden="true"></i><span>Reply</span></a></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="add_comment_container">
                                                    <div className="add_comment_title">Add a review</div>
                                                    <div className="add_comment_text">You must be <a href="#">logged</a> in to post a comment.</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar_section">
                                    <div className="sidebar_section_title">Teacher</div>
                                    <div className="sidebar_teacher">
                                        <div className="teacher_title_container d-flex flex-row align-items-center justify-content-start">
                                            <div className="teacher_image"><img src={teacher} alt="" /></div>
                                            <div className="teacher_title">
                                                <div className="teacher_name"><a href="#">{this.props.courseTypeReducer.data.teacher}</a></div>
                                                <div className="teacher_position">{this.props.courseTypeReducer.data.teacher_des}</div>
                                            </div>
                                        </div>
                                        <div className="teacher_meta_container">
                                            <div className="teacher_meta d-flex flex-row align-items-center justify-content-start">
                                                <div className="teacher_meta_title">Average Rating:</div>
                                                <div className="teacher_meta_text ml-auto"><span>4.7</span><i className="fa fa-star" aria-hidden="true"></i></div>
                                            </div>
                                            <div className="teacher_meta d-flex flex-row align-items-center justify-content-start">
                                                <div className="teacher_meta_title">Review:</div>
                                                <div className="teacher_meta_text ml-auto"><span>12k</span><i className="fa fa-comment" aria-hidden="true"></i></div>
                                            </div>
                                            <div className="teacher_meta d-flex flex-row align-items-center justify-content-start">
                                                <div className="teacher_meta_title">Quizzes:</div>
                                                <div className="teacher_meta_text ml-auto"><span>600</span><i className="fa fa-user" aria-hidden="true"></i></div>
                                            </div>
                                        </div>
                                        <div className="teacher_info">
                                            <p>Hi! I am Masion, I’m a marketing & management  eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum nam nulla ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );}
        else{
            return (<h3>Loading</h3>);
        }
    }
}

const mapStateToProps = (state) =>{
    return state;
}

export default withRouter(connect(mapStateToProps)(Courses));