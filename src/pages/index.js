import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import NewsLetter from "../components/newsletter"

import { FaTwitter,FaFacebookF,FaInstagram, FaFacebook } from 'react-icons/fa'

const bgVideo = require("../dist/mp4/bg.mp4")

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="overlay"></div>
    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
      <source src={bgVideo} type="video/mp4" />
    </video>

    <div className="masthead">
      <div className="masthead-bg"></div>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 my-auto">
            <div className="masthead-content text-white py-5 py-md-0">
              <h1 className="mb-3">Coming Soon!</h1>
              <p className="mb-5">We're working hard to finish the development of this site. Our target launch date is
              <strong>January 2019</strong>! Sign up for updates using the form below!</p>
              <NewsLetter />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="social-icons">
      <ul className="list-unstyled text-center mb-0">
        <li className="list-unstyled-item">
          <a href="#">
            <FaTwitter />
          </a>
        </li>
        <li className="list-unstyled-item">
          <a href="#">
            <FaFacebook />
          </a>
        </li>
        <li className="list-unstyled-item">
          <a href="#">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
