import styled from '@emotion/styled';
import { Link } from 'gatsby';

const SquareButton = styled(Link)`
  display: inline-block;
  font-size: 1.25rem;
  font-family: 'Oswald';
  border: red;
  border-style: solid;
  border-width: 1px;
  background-color: black;
  color: white;
  text-shadow: 2px 1.5px 2px grey;
  box-shadow: 2px 1.5px 2px grey;
  :hover {
    box-shadow: 5px 4px 4px grey;
    color: white;
    text-decoration: none;
  }
`;

export default SquareButton;
