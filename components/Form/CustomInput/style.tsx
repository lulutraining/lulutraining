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
    border-radius: 5px;
    padding: 15px;
    border: 1px solid ${(props) => props.theme.colors.darkblue};
  }

  fieldset {
    border: 0;
  }
`;
