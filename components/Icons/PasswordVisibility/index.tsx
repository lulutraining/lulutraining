import { Container } from './style';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface PasswordVisibilityProps {
  visible: boolean;
  setVisible: (v: boolean) => void;
}

export const PasswordVisibility = (props: PasswordVisibilityProps) => {
  const { visible, setVisible } = props;

  const handleClickShowPassword = () => {
    setVisible(!visible);
  };

  return (
    <Container onClick={handleClickShowPassword}>
      <IconButton>{!visible ? <VisibilityIcon /> : <VisibilityOffIcon />}</IconButton>
    </Container>
  );
};
