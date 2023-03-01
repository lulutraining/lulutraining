import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 0 20px 30px;
  position: relative;

  .bodyCheck__title {
    margin: 60px 0;

    img {
      width: 157px;
      height: 32px;
    }

    p {
      margin: 80px 0;
      font-size: 30px;
      color: ${(props) => props.theme.colors.darkgray};
      text-align: center;
      font-weight: 500;
    }
  }

  form {
    width: 100%;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    input {
      border: 1px solid ${(props) => props.theme.colors.darkgray};
    }

    .bodyCheck__gender-check {
      position: relative;

      .custom-radio {
        width: 100%;
        display: flex;
        gap: 10px;
        margin-bottom: 10px;

        label {
          display: block;
          flex-grow: 1;
          position: relative;
          z-index: 10;

          input {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;

            &:checked + .female {
              color: #fff;
              background: ${(props) => props.theme.colors.pink};
            }

            &:checked + .male {
              color: #fff;
              background: ${(props) => props.theme.colors.darkgray};
            }
          }

          span {
            display: inline-block;
            text-align: center;
            padding: 15px;
            width: 100%;
            color: ${(props) => props.theme.colors.pink};
            border: 2px solid ${(props) => props.theme.colors.pink};
            border-radius: 5px;
            transition: background 0.5s;

            &.female {
              color: ${(props) => props.theme.colors.pink};
              border: 2px solid ${(props) => props.theme.colors.pink};
            }

            &.male {
              color: ${(props) => props.theme.colors.darkgray};
              border: 2px solid ${(props) => props.theme.colors.darkgray};
            }
          }
        }
      }
    }

    .bodyCheck__bodyinfo {
      position: relative;
      display: flex;
      justify-content: space-between;
      gap: 18px;

      .bodyCheck__bodyinfo-items {
        display: flex;
        flex-basis: 50%;
        align-items: flex-end;
        gap: 8px;

        div {
          padding: 0;
          flex: 1;
        }

        span {
          color: ${(props) => props.theme.colors.darkgray};
        }
      }
    }

    .bodyCheck__submit-button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 100px;
      width: 100%;

      button {
        width: 200px;
        margin: 0 auto;
        height: 51px;
        padding: 0;
        border: 1px solid ${(props) => props.theme.colors.darkgray};
        background: none;
        border-radius: 5px;
        font-weight: bold;
        color: #fff;
        background-color: ${(props) => props.theme.colors.darkgray};
      }
    }

    .MuiFormHelperText-root {
      position: absolute;
      bottom: -25px;
      color: #d32f2f;
    }
  }
`;
