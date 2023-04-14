import styled from '@emotion/styled';
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 0 20px;

  .mypage__section-title {
    h3 {
      span {
        font-size: 30px;
      }
    }
  }

  .mypage__section-info {
    display: flex;
    justify-content: space-between;
    text-align: center;

    li {
      display: flex;
      flex-direction: column;
      gap: 10px;

      p {
        font-size: 22px;
        font-weight: 600;
      }
    }
  }

  .mypage__tab {
    .MuiTabPanel-root {
      padding: 24px 0;

      &.mypage__tabPanel-badge {
        ul {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fill, 80px);
          grid-auto-rows: 80px;
          gap: 30px;
          justify-content: center;

          li {
            color: #fff;
            display: flex;
            cursor: pointer;

            span {
              width: 80px;
              height: 80px;
              background-color: gray;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
              font-size: 20px;
            }
          }
        }
      }

      &.mypage__tabPanel-savedList {
        > ul {
          display: flex;
          flex-direction: column;
          gap: 30px;

          > li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            cursor: pointer;

            p {
              font-weight: 600;
              margin-bottom: 20px;
            }

            img {
              border-radius: 10px;
            }

            .savedList__thumb {
              display: flex;
              gap: 20px;

              .savedList__thumb-info {
                flex: 1;

                .thumb__info-box {
                  display: flex;
                  gap: 5px;
                  align-items: center;

                  li {
                    width: 100%;
                    display: flex;
                    gap: 5px;
                    align-items: center;
                    font-size: 0.9rem;
                  }
                }
              }
            }

            .thumb__bookmark {
              align-self: flex-start;
              svg {
                color: ${({ theme }) => theme.colors.pink};
              }
            }
          }
        }
      }
    }

    .MuiTabs-scroller {
      border: none;

      .MuiTab-root {
        font-size: 17px;
        &[aria-selected='true'] {
          color: ${({ theme }) => theme.colors.pink};
        }
      }

      .MuiTabs-indicator {
        height: 3px;
        background-color: ${({ theme }) => theme.colors.pink};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.mq.mobile}) {
    .mypage__tab {
      .MuiTabPanel-root {
        &.mypage__tabPanel-savedList {
          > ul {
            > li {
              .savedList__thumb {
                .savedList__thumb-info {
                  .thumb__info-box {
                    flex-direction: column;
                    gap: 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
