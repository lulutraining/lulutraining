import styled from '@emotion/styled';

export const Container = styled.section`
  .signin__header {
    padding: 30px 0;

    .signin__header-logo {
      margin: 0 auto;
      width: 100px;
      height: auto;

      img {
        width: 100px;
        height: 100px;
      }
    }
  }

  .signin-btn {
    width: 100%;
    height: 55px;
    border-radius: 5px;
    margin-top: 30px;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.03em;
    color: #ffffff;
    background-color: ${(props) => props.theme.colors.darkblue};
    border: 0;
    cursor: pointer;
  }

  .signup-btn {
    width: 100%;
    height: 55px;
    border-radius: 5px;
    margin-top: 10px;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.colors.darkblue};
    border: 1px solid ${(props) => props.theme.colors.darkblue};
    background-color: transparent;
    cursor: pointer;
  }
`;
