import styled from '@emotion/styled';

export const Container = styled.section`
  .signin__header {
    padding: 30px 0;
  }

  .signin__header-title {
    font-size: 45px;
    line-height: 50px;
    font-weight: 600;
    letter-spacing: -0.03em;
    padding: 30px 0;
    color: ${(props) => props.theme.colors.darkblue};

    .header-small-text {
      font-size: 40px;
    }
  }

  .characters__item {
    width: 15%;
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

  @media screen and (max-width: ${(props) => props.theme.mq.mobile}) {
    .signin__header-title {
      font-size: 35px;
      line-height: 40px;
      .header-small-text {
        font-size: 30px;
      }
    }
  }
`;
