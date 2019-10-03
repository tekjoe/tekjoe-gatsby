import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ExternalLink from "../components/atoms/ExternalLink"
import LeafletMap from "../components/LeafletMap"
import ContactForm from "../components/ContactForm"

const MapSection = styled(LeafletMap)`
  grid-column: 1/-1;
  height: 500px;
  margin-top: 3rem;
  z-index: 0;
`

const ContactSection = styled.section`
  grid-column: 2/-2;
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
`

const ContactBody = styled.div`
  margin-bottom: 5rem;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  h2:nth-last-child(1) {
    margin-top: 3rem;
  }
  p {
    margin-bottom: 1.25rem;
  }
`

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <MapSection />
      <ContactSection>
        <ContactBody>
          <h2>Let's build something together</h2>
          <p>
            I live and work in Milwaukee, but the internet is my home. If you
            have a quick question or comment, hit me up&nbsp;
            <ExternalLink
              href="https://www.twitter.com/_tekjoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>@_tekjoe</span>
            </ExternalLink>
            &nbsp; or&nbsp;
            <ExternalLink
              href="mailto:joe@tekjoe.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>send me an email</span>
            </ExternalLink>
            .
          </p>
          <h2>Have something specific in mind?</h2>
          <p>
            I'm always open to hearing about new projects and opportunities. I
            love working with Wordpress, Javascript, HTML, and CSS.
          </p>
          <p>
            If you want to get in touch about a new project, fill out my contact
            form to get started. I always try to respond to every email within a
            couple of days.
          </p>
        </ContactBody>
        <div className="contact__form">
          <ContactForm data-netlify="true" />
        </div>
      </ContactSection>
    </Layout>
  )
}

export default ContactPage
