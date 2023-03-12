import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Link = styled(NavLink)`
  &.active {
    color: red;
  }
`;

export { Link };
