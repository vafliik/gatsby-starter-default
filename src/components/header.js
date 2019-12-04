import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header class="main-header header-style-three">
    	
    	<div class="main-box">
            <div class="outer-container clearfix">
                <div class="logo-box">
                    <div class="logo"><a href="index.html"><img src="images/logo-3.png" alt=""></a></div>
                </div>
                
                <div class="nav-outer clearfix">
                    <nav class="main-menu">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        
                        <div class="navbar-collapse collapse clearfix">
                            <ul class="navigation clearfix">
                                <li class="current dropdown"><a href="#">Home</a>
                                    <ul>
                                        <li><a href="index.html">Homepage One</a></li>
                                        <li><a href="index-2.html">Homepage Two</a></li>
                                        <li><a href="index-3.html">Homepage Three</a></li>
                                        <li class="dropdown"><a href="#">Headers Style</a>
                                            <ul>
                                                <li><a href="index.html">Header Style One</a></li>
                                                <li><a href="index-2.html">Header Style Two</a></li>
                                                <li><a href="index-3.html">Header Style Three</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown"><a href="#">About Us</a>
                                    <ul>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="agents.html">Agents</a></li>
                                        <li><a href="agents-single.html">Agents Single</a></li>
                                        <li><a href="appointment.html">Appointment</a></li>
                                    </ul>
                                </li>
                                <li><a href="features.html">Features</a></li>
                                <li class="dropdown"><a href="#">Gallery</a>
                                    <ul>
                                        <li><a href="gallery.html">Gallery Fullwidth</a></li>
                                        <li><a href="gallery-grid.html">Gallery Three Column</a></li>
                                        <li><a href="gallery-single.html">Gallery Single</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown"><a href="#">Blog</a>
                                    <ul>
                                        <li><a href="blog-grid.html">Our Blog</a></li>
                                        <li><a href="blog-detail.html">Blog Detail</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact us</a></li>
                             </ul>
                        </div>
                    </nav>
                    
                    <div class="options-box">
                        <ul class="options-nav">
                            
                            <li class="search-box-outer">
                                <div class="dropdown">
                                    <button class="search-box-btn dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="fa fa-search"></span></button>
                                    <ul class="dropdown-menu pull-right search-panel" aria-labelledby="dropdownMenu3">
                                        <li class="panel-outer">
                                            <div class="form-container">
                                                <form method="post" action="blog.html">
                                                    <div class="form-group">
                                                        <input type="search" name="field-name" value="" placeholder="Search Here" required>
                                                        <button type="submit" class="search-btn"><span class="fa fa-search"></span></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#"><span class="icon fa fa-phone"></span></a></li>
                            <li><a href="#"><span class="icon fa fa-envelope"></span></a></li>
                        </ul>
                    </div>
                    
                </div>
                
            </div>
        </div>
    
        <div class="sticky-header">
        	<div class="auto-container">
            	
                <div class="outer-container clearfix">
                    <div class="logo-box pull-left">
                        <div class="logo"><a href="index.html"><img src="images/logo-small.png" alt=""></a></div>
                    </div>
                    
                    <div class="nav-outer clearfix">
                        <nav class="main-menu">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>
                            
                            <div class="navbar-collapse collapse clearfix">
                                <ul class="navigation clearfix">
                                    <li class="current dropdown"><a href="#">Home</a>
                                        <ul>
                                            <li><a href="index.html">Homepage One</a></li>
                                            <li><a href="index-2.html">Homepage Two</a></li>
                                            <li><a href="index-3.html">Homepage Three</a></li>
                                            <li class="dropdown"><a href="#">Headers Style</a>
                                                <ul>
                                                    <li><a href="index.html">Header Style One</a></li>
                                                    <li><a href="index-2.html">Header Style Two</a></li>
                                                    <li><a href="index-3.html">Header Style Three</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">AboutUs</a>
                                        <ul>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="agents.html">Agents</a></li>
                                            <li><a href="agents-single.html">Agents Single</a></li>
                                            <li><a href="appointment.html">Appointment</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="features.html">Features</a></li>
                                    <li class="dropdown"><a href="#">Gallery</a>
                                        <ul>
                                            <li><a href="gallery.html">Gallery Fullwidth</a></li>
                                            <li><a href="gallery-grid.html">Gallery Three Column</a></li>
                                            <li><a href="gallery-single.html">Gallery Single</a></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">Blog</a>
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
