import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

export const Container = styled.header`
  width: calc(100% - 40px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  .header__logo {
    width: 50px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const StyledIconBtn = styled(IconButton)`
  svg {
    font-size: 45px;
    color: ${(props) => props.theme.colors.darkgray};
  }
`;
