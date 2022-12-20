import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 114px;
  width: 100%;
  button {
    width: 149px;
    height: 51px;
    padding: 0;
    border: 1px solid ${(props) => props.theme.colors.darkblue};
    background: none;
    border-radius: 5px;
    font-weight: bold;

    &.button-prev {
      color: ${(props) => props.theme.colors.darkblue};
    }
    &.button-next {
      color: #fff;
      background-color: ${(props) => props.theme.colors.darkblue};
    }
  }
`;
