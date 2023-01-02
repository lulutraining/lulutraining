import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding-bottom: 30px;
  position: relative;

  .signup__title {
    margin-top: 54px;

    img {
      width: 144px;
      height: 144px;
    }

    p {
      margin: 34px 0 50px 0;
      font-size: 30px;
      color: ${(props) => props.theme.colors.pastelblue};
      text-align: center;
    }
  }

  form {
    width: 100%;
    padding-bottom: 80px;

    input {
      border: 1px solid ${(props) => props.theme.colors.darkblue};
    }

    .signup__button-signup {
      padding: 0;
      margin: 0 auto;
      display: block;
      width: 200px;
      height: 60px;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      color: #fff;
      margin-top: 80px;
      background: ${(props) => props.theme.colors.pastelblue};
    }
  }
`;
