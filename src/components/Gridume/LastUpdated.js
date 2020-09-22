import React from 'react';
import Moment from 'moment';
import Styled from 'styled-components';

const Date = Styled.small`
  position: absolute;
  right: 10px;
  top: 10px;
`;

function LastUpdated({ date = '' }) {

  return <Date>Last updated: { Moment(date).format('MMM D, YYYY') }</Date>;

}

export default LastUpdated;