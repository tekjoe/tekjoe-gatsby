import React from "react"

import Layout from "../components/layout"
import Masthead from "../components/masthead"
import SEO from "../components/seo"
import CallToAction from "../components/CallToAction"
import SignUp from "../components/SignUp"

import SlideLink from "../components/atoms/SlideLink"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Masthead>
      <h1>
        Hey there! I'm{" "}
        <SlideLink to="/">
          <span>Joe Ramirez</span>
        </SlideLink>
        , a designer, developer, and all-around fan of all things web.
      </h1>
      <h2>
        <SlideLink to="/">
          <span>More about me</span>
        </SlideLink>
      </h2>
    </Masthead>
    <CallToAction />
    <SignUp />
  </Layout>
)

export default IndexPage
