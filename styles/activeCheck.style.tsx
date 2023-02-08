import styled from '@emotion/styled';
import { Button, LinearProgress, ToggleButtonGroup } from '@mui/material';

export const Container: React.ElementType = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  .activecheck__progress {
    position: fixed;
    width: 100%;
    max-width: 700px;
    padding: 4vh 20px 2vh;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    box-sizing: border-box;
    background-color: #fff;
    z-index: 2;
    .activecheck__progress-text {
      display: flex;
      justify-content: space-between;
      ul {
        display: flex;
      }
    }
  }
  section {
    margin: 0 0 50px;
    h2 {
      font-weight: 700;
      font-size: 20px;
      line-height: 29px;
      letter-spacing: -0.04em;
      color: ${(props) => props.theme.colors.darkgray};
      margin-bottom: 30px;
    }
  }
  form {
    margin-top: 12vh;
    button {
      max-width: 100%;
    }
  }
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
  @media screen and (max-width: ${(props) => props.theme.mq.mobile}) {
    .activecheck__progress {
      padding: 4vh 5% 2vh;
    }
  }
`;

export const CustomLinearProgress = styled(LinearProgress)`
  height: 6px;
  background-color: #e7e7e7;
  margin-top: 14px;
  .MuiLinearProgress-bar {
    background-color: ${(props) => props.theme.colors.pink};
  }
`;

export const CustomToggleButtonGroup = styled(ToggleButtonGroup)`
  width: 100%;
  .MuiToggleButtonGroup-grouped {
    border: 2px solid ${(props) => props.theme.colors.darkgray};
    margin-bottom: 20px;
    border-radius: 5px !important;
    justify-content: start;
    letter-spacing: -0.03em;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 600;
    color: ${(props) => props.theme.colors.darkgray};
    &.Mui-selected {
      background-color: ${(props) => props.theme.colors.darkgray};
      color: #fff;
      &:hover {
        background-color: ${(props) => props.theme.colors.darkgray};
        color: #fff;
      }
    }
    &:not(:first-of-type) {
      border: 2px solid ${(props) => props.theme.colors.darkgray};
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
