var React = require('react');
var Register = require('../../components/Register');

var Home = React.createClass({

	render: function(){
		return (
			<div>

		        <section id="slider" className="slider-parallax swiper_wrapper full-screen clearfix">
		            <div className="slider-parallax-inner">

		                <div className="swiper-container swiper-parent">
		                    <div className="swiper-wrapper">
		                        <div className="swiper-slide" style={{backgroundImage: 'url("images/slider/swiper/bag.png")', backgroundPosition: 'center top'}}>
		                            <div className="container clearfix">
		                                <div className="slider-caption slider-caption-left">
		                                	<br />

		                                    <h2 style={{color:'#fff'}} data-caption-animate="fadeInUp">DONEZO</h2>
		                                    <p style={{color:'#fff'}} data-caption-animate="fadeInUp" data-caption-delay="200">Beat That Deadline.<br />Together.</p>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                </div>

		            </div>

		            <div className="container clearfix">
		                <Register />
		            </div>
		        </section>

		        <section id="content" style={{background: '#f9f9f9'}}>

		            <div className="content-wrap">

		                <div className="container clearfix">

		                	<div className="col_one_third col_last">
		                        <div className="feature-box fbox-effect">
		                            <div className="fbox-icon">
		                                <a href="#"><i className="icon-beaker i-alt"></i></a>
		                            </div>
		                            <h3>Be Accountable</h3>
		                            <p>Many studies have shown that accountability improves on-time performance. Find a buddy to meet your deadlines. </p>
		                        </div>
		                    </div>
		                    <div className="col_one_third">
		                        <div className="feature-box fbox-effect">
		                            <div className="fbox-icon">
		                                <a href="#"><i className="icon-screen i-alt"></i></a>
		                            </div>
		                            <h3>Safe Meetings</h3>
		                            <p>Social Media Verification ensures safety while preserving anonymity.</p>
		                        </div>
		                    </div>

		                    <div className="col_one_third">
		                        <div className="feature-box fbox-effect">
		                            <div className="fbox-icon">
		                                <a href="#"><i className="icon-eye i-alt"></i></a>
		                            </div>
		                            <h3>Mutual Pledge</h3>
		                            <p>The only thing that matters is a common deadline. You can knit while your buddy balances the U.S. Treasury.</p>
		                        </div>
		                    </div>
		                    <div className="clear"></div>



		                    <div className="clear"></div><div className="line"></div>


		                </div>
		            </div>
		        </section>

			</div>
		);
	}

});

module.exports = Home;