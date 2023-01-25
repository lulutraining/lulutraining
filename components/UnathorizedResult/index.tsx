import { Container } from './style';
import logoImage from '/public/images/logo.png';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

interface UnathorizedResultProps {
  isLogin: boolean;
}

export const UnathorizedResult = ({ isLogin }: UnathorizedResultProps) => {
  return (
    <Container open={isLogin}>
      <Box>
        <Image src={logoImage} alt="oz-logo" priority />
        <p>로그인이 필요한 서비스 입니다</p>
        <Button type="button">
          <Link href="/signin">로그인</Link>
        </Button>
      </Box>
    </Container>
  );
};
