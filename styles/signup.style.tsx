import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding-bottom: 30px;
  position: relative;
  padding: 0 20px;

  .signup__title {
    margin-top: 54px;

    img {
      width: 157px;
      height: 32px;
    }

    p {
      margin: 80px 0;
      font-size: 30px;
      color: ${(props) => props.theme.colors.darkgray};
      text-align: center;
    }
  }

  form {
    width: 100%;
    padding-bottom: 80px;

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
      background: ${(props) => props.theme.colors.darkgray};
    }
  }
`;
