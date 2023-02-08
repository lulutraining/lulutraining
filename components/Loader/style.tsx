import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .loader-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.colors.darkgray};
    font-size: 25px;
    font-weight: 600;
  }
`;
