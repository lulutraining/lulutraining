import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;

  .activecheck__result-title {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 28px;
    line-height: 1.5;
    font-weight: 700;
    letter-spacing: -0.03em;
    text-align: center;
    margin-top: 10vh;
  }
  .activecheck__result-banner {
    position: relative;
    text-align: center;
    img {
      width: 100%;
      max-width: 400px;
      height: auto;
    }
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-weight: 600;
      font-size: 29px;
      line-height: 35px;
      letter-spacing: -0.03em;
    }
  }
`;
export const CustomButton = styled(Button)`
  width: 100%;
  max-width: 400px;
  line-height: 51px;
  padding: 0;
  margin: 0 auto 40px;
  border-radius: 5px;
  font-weight: bold;
  box-shadow: none;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  &.MuiButton-contained {
    background-color: ${(props) => props.theme.colors.darkgray};
    color: #fff;
  }
  &.MuiButton-outlined {
    border: 2px solid ${(props) => props.theme.colors.darkgray};
    color: ${(props) => props.theme.colors.darkgray};
  }
`;
