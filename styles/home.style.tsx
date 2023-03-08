import styled from '@emotion/styled';
import { Tab } from '@mui/material';

export const Container = styled.div`
  position: relative;
  padding-left: 20px;

  .home__common-sense {
    padding: 70px 0;
    font-size: 26px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: -0.06em;
  }

  .home__section-title {
    font-size: 30px;
    font-weight: 700;
    padding: 10px 0 30px;
  }

  .recommendation {
    .recommendation-thumb-box {
      width: 100%;
      position: relative;
      overflow-x: scroll;
      height: 330px;
      -ms-overflow-style: none;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      .recommendation-thumbs {
        display: flex;
        position: absolute;

        .recommendation-thumb {
          margin-right: 24px;
        }
      }
    }
  }

  .courses {
    padding-right: 20px;

    .courses-thumbs {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 30px 0;

      .courses-thumb {
        width: 100%;
        margin-bottom: 30px;

        img {
          width: 100%;
        }
      }
    }
  }
`;

export const StyledTab = styled(Tab)`
  font-size: 16px;
  margin-right: 16px;
  color: ${(props) => props.theme.colors.darkgray};
  border: 1px solid ${(props) => props.theme.colors.darkgray};
  border-radius: 12px;
  text-transform: capitalize;
  transition: 0.1s ease-in-out;
  min-width: 0;

  &:hover,
  &.Mui-selected {
    color: #fff;
    background-color: ${(props) => props.theme.colors.pink};
    border: 1px solid ${(props) => props.theme.colors.pink};
  }
  &.MuiTabs-indicator {
    color: red;
    background-color: red;
  }
`;
