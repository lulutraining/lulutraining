import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 54px;

  img {
    width: 144px;
    height: 144px;
  }

  p {
    margin: 34px 0 50px 0;
    font-size: 30px;
    color: ${(props) => props.theme.colors.pastelblue};
    text-align: center;
  }
`;
