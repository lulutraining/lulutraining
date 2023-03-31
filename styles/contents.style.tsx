import styled from '@emotion/styled';

export const Container = styled.div`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    svg {
      color: #000;
      font-size: 24px;
    }
  }

  #contents__youtube_wrap {
    position: relative;
    #contents__youtube {
      width: 100%;
    }
  }
  #contents__title {
    padding: 40px 17px;
    h3 {
      text-transform: capitalize;
      font-size: 17px;
      line-height: 21px;
      color: ${(props) => props.theme.colors.darkgray};
    }
    h2 {
      font-family: 'Noto Sans KR';
      font-weight: 700;
      font-size: 20px;
      line-height: 29px;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      span {
        color: ${(props) => props.theme.colors.pink};
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
      }
    }
  }

  #contents__info {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.6;
    align-items: center;
    text-align: justify;
    letter-spacing: -0.04em;
    margin: 0 17px;
    padding: 50px 0;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
  }

  #contents__instructor {
    display: flex;
    align-items: center;
    padding: 40px 17px;
    #instructor-profile {
      width: 120px;
      height: 120px;
      border-radius: 15px;
      margin-right: 40px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    #instructor-info {
      width: 120px;
      h3 {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
      }
      h2 {
        margin: 8px 0;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        span {
          font-size: 28px;
          line-height: 34px;
        }
      }
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
  @media screen and (max-width: ${(props) => props.theme.mq.mobile}) {
    #contents__youtube {
      width: 100%;
      height: 56vw;
    }
    #contents__instructor {
      justify-content: center;
    }
  }
`;
