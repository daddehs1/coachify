import styled from 'styled-components';
import {ru, themeColor} from '../../helpers/styled-components';

const ArtistSelectViewWrapper = styled.div `
  width: 100%;
`;

const ArtistList = styled.div `
  ${ ''/* margin-top: ${ru(.8)}; */}
`;

const ArtistListItem = styled.div `
  border-bottom: 1px solid ${themeColor('black')};

  background-color: ${props => props.selected
  ? 'green'
  : 'transparent'}
`;

export {
  ArtistSelectViewWrapper,
  ArtistList,
  ArtistListItem
}
