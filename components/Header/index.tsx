import { Container, StyledIconBtn } from './style';
import logoImage from '/public/images/logo_v2.png';
import { useRouter } from 'next/router';
import Image from 'next/image';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Header = () => {
  const router = useRouter();

  const handleClickUserIcon = () => {
    router.push('/mypage');
  };

  const handleClickLogo = () => {
    router.push('/');
  };

  return (
    <Container>
      <h1 className="header__logo" onClick={handleClickLogo}>
        <Image src={logoImage} alt="lulutraining-logo" priority />
      </h1>
      <StyledIconBtn onClick={handleClickUserIcon}>
        <AccountCircleIcon />
      </StyledIconBtn>
    </Container>
  );
};
