import React, { useState, Children } from 'react';
import { Box, Text } from 'rebass/styled-components';
import styled from 'styled-components';


const Popover = styled.div`

  width: 100px;
  height: 100px;

  &.open {

  }
`;

function SearchCard({ children }) {

  const [searching, setSearching] = useState(false);
  const [showPopover, setshowPopover] = useState(false);

  const search = () => {
    setSearching(true);
    setshowPopover(true);
  }

  const onMouseEnter = (e) => search();
  const onMouseLeave = (e) => {
    setshowPopover(false);
  }


  return (
    <Text
      onMouseEnter={ onMouseEnter }
      onMouseLeave={ onMouseLeave }
      as="span"
      sx={ {
        textDecoration: 'underline',
        cursor: 'pointer',
        position: 'relative',
      } }>
      {/* { showPopover && ( */}
        <Box
          sx={ {
            width: 200,
            height: 300,
            position: 'absolute',
            transition: `transform 0.4s`,
            transformOrigin: '100% 100%',
            bottom: 0,
            left: 0,
            right: 0,
            margin: 'auto',
            background: '#fff',
            boxShadow: `0 50px 100px -20px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3)`
          }}
        >
        </Box>
      {/* ) } */}
      { children }
    </Text>
  )
}

export default SearchCard;