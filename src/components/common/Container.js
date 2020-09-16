import Styled, { css } from 'styled-components';

const Container = Styled.div`
  max-width: 90vw;
  margin: 0 auto;


  ${ props => props.fluid ? `

  ` : ''}

`;

export default Container;
