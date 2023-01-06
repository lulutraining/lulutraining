import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-items: center;
  align-items: center;
  position: relative;

  svg {
    flex: 1;
  }

  .loader-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.colors.darkblue};
    font-size: 25px;
    font-weight: 600;
  }
`;
