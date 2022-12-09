import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px 0;

  label {
    color: ${(props) => props.theme.colors.lightblue};
    padding-bottom: 10px;
  }

  input {
    background: #e6e6e6;
    border-radius: 5px;
    border: 0;
    padding: 15px;
  }

  fieldset {
    border: 0;
  }
`;
