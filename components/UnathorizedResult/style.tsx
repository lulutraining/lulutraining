import styled from '@emotion/styled';
import { Modal } from '@mui/material';

export const Container = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;

  .MuiBox-root {
    width: 400px;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    color: ${(props) => props.theme.colors.darkblue};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    border-inline: 3px solid #ff4057;

    &:focus {
      outline: none;
    }

    img {
      width: 40px;
      height: auto;
    }

    p {
      text-align: center;
      margin-bottom: 40px;
    }

    button {
      color: inherit;
      border-radius: 10px;
      border: 1px solid ${(props) => props.theme.colors.darkblue};
      width: 30%;
      padding: 0;

      a {
        width: 100%;
        padding: 5px;
      }
    }
  }
`;
