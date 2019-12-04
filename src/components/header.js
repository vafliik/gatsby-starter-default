import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="main-header header-style-three">
    	
    	<div className="main-box">
            <div className="outer-container clearfix">
                <div className="logo-box">
                    <div className="logo"><a href="index.html"><img src="images/logo-3.png" alt="" /></a></div>
                </div>
                
                <div className="nav-outer clearfix">
                    <nav className="main-menu">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        
                        <div className="navbar-collapse collapse clearfix">
                            <ul className="navigation clearfix">
                                <li className="current dropdown"><a href="#">Home</a>
                                    <ul>
                                        <li><a href="index.html">Homepage One</a></li>
                                        <li><a href="index-2.html">Homepage Two</a></li>
                                        <li><a href="index-3.html">Homepage Three</a></li>
                                        <li className="dropdown"><a href="#">Headers Style</a>
                                            <ul>
                                                <li><a href="index.html">Header Style One</a></li>
                                                <li><a href="index-2.html">Header Style Two</a></li>
                                                <li><a href="index-3.html">Header Style Three</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">About Us</a>
                                    <ul>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="agents.html">Agents</a></li>
                                        <li><a href="agents-single.html">Agents Single</a></li>
                                        <li><a href="appointment.html">Appointment</a></li>
                                    </ul>
                                </li>
                                <li><a href="features.html">Features</a></li>
                                <li className="dropdown"><a href="#">Gallery</a>
                                    <ul>
                                        <li><a href="gallery.html">Gallery Fullwidth</a></li>
                                        <li><a href="gallery-grid.html">Gallery Three Column</a></li>
                                        <li><a href="gallery-single.html">Gallery Single</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a href="#">Blog</a>
                                    <ul>
                                        <li><a href="blog-grid.html">Our Blog</a></li>
                                        <li><a href="blog-detail.html">Blog Detail</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact us</a></li>
                             </ul>
                        </div>
                    </nav>
                    
                    <div className="options-box">
                        <ul className="options-nav">
                            
                            <li className="search-box-outer">
                                <div className="dropdown">
                                    <button className="search-box-btn dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="fa fa-search"></span></button>
                                    <ul className="dropdown-menu pull-right search-panel" aria-labelledby="dropdownMenu3">
                                        <li className="panel-outer">
                                            <div className="form-container">
                                                <form method="post" action="blog.html">
                                                    <div className="form-group">
                                                        <input type="search" name="field-name" value="" placeholder="Search Here" required />
                                                        <button type="submit" className="search-btn"><span className="fa fa-search"></span></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#"><span className="icon fa fa-phone"></span></a></li>
                            <li><a href="#"><span className="icon fa fa-envelope"></span></a></li>
                        </ul>
                    </div>
                    
                </div>
                
            </div>
        </div>
    
        <div className="sticky-header">
        	<div className="auto-container">
            	
                <div className="outer-container clearfix">
                    <div className="logo-box pull-left">
                        <div className="logo"><a href="index.html"><img src="images/logo-small.png" alt="" /></a></div>
                    </div>
                    
                    <div className="nav-outer clearfix">
                        <nav className="main-menu">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            
                            <div className="navbar-collapse collapse clearfix">
                                <ul className="navigation clearfix">
                                    <li className="current dropdown"><a href="#">Home</a>
                                        <ul>
                                            <li><a href="index.html">Homepage One</a></li>
                                            <li><a href="index-2.html">Homepage Two</a></li>
                                            <li><a href="index-3.html">Homepage Three</a></li>
                                            <li className="dropdown"><a href="#">Headers Style</a>
                                                <ul>
                                                    <li><a href="index.html">Header Style One</a></li>
                                                    <li><a href="index-2.html">Header Style Two</a></li>
                                                    <li><a href="index-3.html">Header Style Three</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#">AboutUs</a>
                                        <ul>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="agents.html">Agents</a></li>
                                            <li><a href="agents-single.html">Agents Single</a></li>
                                            <li><a href="appointment.html">Appointment</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="features.html">Features</a></li>
                                    <li className="dropdown"><a href="#">Gallery</a>
                                        <ul>
                                            <li><a href="gallery.html">Gallery Fullwidth</a></li>
                                            <li><a href="gallery-grid.html">Gallery Three Column</a></li>
                                            <li><a href="gallery-single.html">Gallery Single</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#">Blog</a>
                                        <ul>
                                            <li><a href="blog-grid.html">Our Blog</a></li>
                                            <li><a href="blog-detail.html">Blog Detail</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact us</a></li>
                                 </ul>
                            </div>
                        </nav>
                        
                    </div>
                    
            	</div>
                
            </div>
        </div>
    
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
