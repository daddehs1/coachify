import styled from 'styled-components';
import {ru, themeColor} from '../../helpers/styled-components';

const SearchBoxViewWrapper = styled.div `
  width: 80%;
  margin: ${ru(1)};
  position: relative;
`

const SearchInput = styled.input `
  width: 100%;
  font-size: ${ru(1.6)};
  font-weight: 500;
  letter-spacing: 1px;
  color: white;
  text-align: center;

  background-color: transparent;
  border: 1.5px solid transparent;
  border-bottom-color: ${themeColor('accent')};
  border-radius: 0;

  padding: ${ru(.5)} calc(${ru(1)} + 24px);

  ${ ''/* remove some default input styling */}
    font-family: inherit;
    &:focus {
      outline: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    -moz-appearance:textfield; /* Firefox */
`

const Icon = styled.div `
  margin-right: ${ru(.5)};
  position: absolute;
  top: 50%;
  right: 0;
  color: ${themeColor('accent')};
  transform: scaleX(-1) translateY(-50%);
`
export {
  SearchBoxViewWrapper,
  SearchInput,
  Icon
}
