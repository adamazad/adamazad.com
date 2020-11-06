import Styled from 'styled-components'

export const Title = Styled.h3``
export const Heading5 = Styled.h5`
  font-size: 16px;
`
export const Heading6 = Styled.h6`
  margin-bottom: 0px;
  font-size: 14px;
`

export const Meta = Styled.small``
export const Description = Styled.div``

export const Grid = Styled.div(
  props => `
  position: relative;
  max-width: 1000px;
  width: 100%;
  margin: auto;
  padding: 0px;
  display: grid;
  color: ${props.theme.color};
  grid-gap: ${props.theme.gridGap};
  font-size: ${props.theme.fontSize};
  font-weight: 400;
  background-color: ${props.theme.backgroundColor};
  font-family: ${props.theme.fontFamilyBase};

  & b,
  & strong {
    font-weight: 600;
  }

  & p {
    margin-bottom: 0px;
    font-size: 12px;
  }
  & a {
    color: #000;
  }
  & a:hover {
    color: #000;
  }
  & small {
    font-size: 10px;
  }
  & ul {
    padding-inline-start: 20px;
  }
  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 400;
    font-family: ${props.theme.fontFamilyHeading};
  }
`
)

export const Column = Styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = Styled.header(
  props => `
  display: flex;
  flex: 0 0 60px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
  justify-content: flex-start;
  align-items: ${props.alignItems ? props.alignItems : 'center'};
`
)

export const HeaderMeta = Styled.header(
  props => `
  display: flex;
  flex: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: ${props.alignItems ? props.alignItems : 'center'};
`
)

export const Content = Styled.main`
  flex-grow: 1;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 2fr;
`
