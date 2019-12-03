import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import FancyParagraph from "../components/fancy-paragraph"

const AboutPage = () => (
    <Layout>

        <h1>About me</h1>
        <FancyParagraph  paragraphText="Styled with CSS Modules." />
        <Link to="/">Domu</Link>
    </Layout>
)

export default AboutPage