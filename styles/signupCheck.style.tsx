import styled from '@emotion/styled';

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 128px;

  img {
    width: 157px;
    height: 32px;
  }

  .check__guide-text {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    p {
      text-align: center;
      color: ${(props) => props.theme.colors.darkgray};
      font-size: 22px;
      line-height: 1.2;
    }

    span {
      display: inline-block;
    }
  }

  .check__button {
    display: flex;
    flex-direction: column;
    gap: 20px;

    button {
      width: 200px;
      height: 60px;
      border: 1px solid ${(props) => props.theme.colors.darkgray};
      font-size: 18px;
      color: inherit;

      &:nth-of-type(1) {
        background: ${(props) => props.theme.colors.darkgray};
        color: #fff;
      }
    }
  }
`;
