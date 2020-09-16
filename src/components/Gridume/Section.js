import React from 'react';
import Styled from 'styled-components';
import { Heading5 } from './Elements';

const Title = Styled(Heading5)`
  color: #212529;
  text-transform: uppercase;
`;

const List = Styled.div``;
const StyledSection = Styled.div(props =>`
  margin-bottom: ${props.theme.gridGap};
`);

export default class Section extends React.Component {
  static Title = Title;
  static List = List;
  static ListItem = List;

  render(){
    return <StyledSection>{ this.props.children }</StyledSection>
  }
}