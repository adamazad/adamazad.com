import React from 'react';
import Styled from 'styled-components';

const HEADER_HEIGHT = 60;

const Container = Styled.div`
  display: flex;
  min-height: 100%;
  min-width: 100%;
  flex-direction: column;
`;

export const Content = Styled.div`
  display: flex;
  flex-grow: 1;
`;

export const Header = Styled.div`
  flex: 0 0 ${HEADER_HEIGHT};
`;

export default class HeaderAndContent extends React.Component {

  static Header = Header;
  static Content = Content;

  render() {
    return (
      <Container>{ this.props.children }</Container>
    );
  }

}