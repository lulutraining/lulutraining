import styled from '@emotion/styled';

export const Container = styled.section<{ isbodycheck: boolean }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 128px;

  .check__guide-text {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    p {
      text-align: center;
      color: ${(props) => props.theme.colors.darkblue};
      font-size: 22px;
      line-height: 1.2;
    }

    img {
      position: absolute;
      top: -17px;
      left: ${(props) => (props.isbodycheck ? '-22px' : '12px')};
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
      border: 1px solid ${(props) => props.theme.colors.pastelblue};
      font-size: 18px;
      color: inherit;

      &:nth-of-type(1) {
        background: ${(props) => props.theme.colors.pastelblue};
        color: #fff;
      }
    }
  }
`;
