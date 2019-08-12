import React from 'react';
import styled from 'styled-components'

const FilterBlock = styled.section`
  flex-basis: 300px;
  display: flex;
  flex-grow: 1;
  max-width: 400px;
`
const Label = styled.label`
  margin-right: 10px;
`
const Input = styled.input`
  flex-grow: 1;
`

function Filter({ filter }) {
  return (
    <FilterBlock>
      <Label>Фильтр: </Label>
      <Input onChange={filter}/>
    </FilterBlock>
  );
}

export default Filter;
