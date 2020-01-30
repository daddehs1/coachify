import styled from 'styled-components';
import ru from '../../helpers/responsive-unit';

const ArtistBoxViewWrapper = styled.div `
  display: flex;
  flex-direction: row;
`;

const Icon = styled.div `
  width: ${ru(5)};
  height: ${ru(5)};
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  border: 1px solid white;
  margin-right: ${ru(1)}
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

const ArtistSelect = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export {
  ArtistBoxViewWrapper,
  Icon,
  ArtistName,
  ArtistSelect
};
