import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  position: relative;
  padding: 0 20px;

  .signin__title {
    margin-top: 54px;

    img {
      width: 157px;
      height: 32px;
    }

    p {
      margin: 60px 0;
      font-size: 30px;
      color: ${(props) => props.theme.colors.darkgray};
      text-align: center;
    }
  }

  form {
    width: 100%;
    padding-bottom: 20px;
  }

  .signin-btn {
    width: 100%;
    height: 55px;
    border-radius: 5px;
    margin-top: 40px;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.03em;
    color: #ffffff;
    background-color: ${(props) => props.theme.colors.pink};
    border: 0;
    cursor: pointer;
  }

  .signup-btn {
    width: 100%;
    height: 55px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 80px;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.03em;
    color: ${(props) => props.theme.colors.darkgray};
    border: 1px solid ${(props) => props.theme.colors.darkgray};
    background-color: transparent;
    cursor: pointer;
  }
`;
