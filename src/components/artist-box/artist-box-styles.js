import styled from 'styled-components';
import {ru, themeColor} from '../../helpers/styled-components';

const ArtistBoxViewWrapper = styled.div `
  display: flex;
  flex-direction: row;
  background-color: ${props => props.selected
  ? themeColor('greenPrimary')
  : 'transparent'};
  margin: ${ru(.4)} ${ru(.8)};
  padding: ${ru(.4)};
  border-radius: 10px;
  transition: background-color .3s ease;
`;

const Icon = styled.div `
  width: ${ru(5)};
  height: ${ru(5)};
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  border: 1px solid ${themeColor('white')};
  margin-right: ${ru(1)};
`

const ArtistName = styled.span `
  font-size: ${ru(1.6)};
  font-weight: 500;
  letter-spacing: 1px;
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: center;

`;

export {
  ArtistBoxViewWrapper,
  Icon,
  ArtistName
};
