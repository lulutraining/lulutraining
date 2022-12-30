import { Container } from './style';
import logoImage from '/public/images/logo.png';
import Image from 'next/image';

interface SignupHeaderProps {
  title: string;
}

export const SignupHeader = ({ title }: SignupHeaderProps) => {
  return (
    <Container>
      <h1>
        <Image src={logoImage} alt="oz-logo" priority />
      </h1>
      <p>{title}</p>
    </Container>
  );
};
