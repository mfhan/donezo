var React = require('react');

var Sidebar = React.createClass({

	render: function(){
		return (
	        <header id="header" className="no-sticky">

	            <div id="header-wrap">
	                <div className="container clearfix">
	                    <div id="primary-menu-trigger"><i className="icon-reorder"></i></div>
	                    <div id="logo" className="nobottomborder">
	                        <a href="index.html" className="standard-logo" data-dark-logo="images/logo-side-dark.png">
	                        	<img src="images/tick.png" alt="Canvas Logo" />
	                        </a>
	                        <a href="index.html" className="retina-logo" data-dark-logo="images/logo-side-dark@2x.png">
	                        	<img src="images/logo-side@2x.png" alt="Canvas Logo" />
	                        </a>
	                    </div>

	                    <nav id="primary-menu">
	                        <ul>
	                            <li>
	                                <a href="index.html"><div>Home</div></a>
	                            </li>
	                            <li>
	                                <a href="index.html"><div>How This Works</div></a>
	                            </li>
	                            <li><a href="#"><div>Causes</div></a>
	                                <ul>
	                                    <li><a href="#"><div>One</div></a></li>
	                                    <li><a href="#"><div>Two</div></a></li>
	                                    <li><a href="#"><div>Three</div></a></li>
	                                </ul>
	                            </li>
	                            <li>
	                                <a href="index.html"><div>About The Developer</div></a>
	                            </li>


	                        </ul>
	                    </nav>

	                    <div className="clearfix visible-md visible-lg">
	                        <a href="#" className="social-icon si-small si-borderless si-facebook">
	                            <i className="icon-facebook"></i>
	                            <i className="icon-facebook"></i>
	                        </a>

	                        <a href="#" className="social-icon si-small si-borderless si-twitter">
	                            <i className="icon-twitter"></i>
	                            <i className="icon-twitter"></i>
	                        </a>
	                    </div>
	                </div>
	            </div>
	        </header>
		);
	}

});

module.exports = Sidebar;