import React from 'react';
import styled from 'styled-components'

const Text = styled.h1`
  font-size: 24px;
  flex-basis: 150px;
`

function Title() {
  return (
    <Text>Заказы</Text>
  );
}

export default Title;
