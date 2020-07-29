import React from "react"
import styled from "styled-components"
import contemplate from "../../../images/tekjoe-thinking.svg"
import CallToAction from "../../molecules/CallToAction"

const CtaSection = styled.section`
  grid-area: cta;
  grid-column: 1/-1;
  background: ${({ theme }) => theme.colors.accentColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`

const CtaImage = styled.div`
  background-image: ${({ theme }) => theme.colors.gradientTopRight};
  display: flex;
  max-height: 100%;
  img {
    display: block;
    padding: 2rem;
    max-width: 100%;
  }
  @media (min-width: 768px) {
    flex: 1;
    flex-basis: 50%;
  }
  @media (min-width: 992px) {
    order: 2;
    img {
      padding: 4rem;
    }
  }
`

export default () => {
  return (
    <CtaSection>
      <CallToAction
        subtitle="Latest Work"
        title="Building a better tomorrow, one website at a time."
        link="slide"
      />
      <CtaImage>
        <img src={contemplate} alt="Tekjoe contemplating web design" />
      </CtaImage>
    </CtaSection>
  )
}
