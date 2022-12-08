import { Container } from './style';
import Image from 'next/image';
import dorothy from '/public/images/dorothy.png';
import lion from '/public/images/lion.png';
import tinman from '/public/images/tinman.png';
import scarecrow from '/public/images/scarecrow.png';

export const Characters = () => {
  return (
    <Container>
      <ul className="characters__wrap">
        <li className="characters__item">
          <Image src={dorothy} alt="도로시" />
        </li>
        <li className="characters__item">
          <Image src={lion} alt="사자" />
        </li>
        <li className="characters__item">
          <Image src={tinman} alt="양철나무꾼" />
        </li>
        <li className="characters__item">
          <Image src={scarecrow} alt="허수아비" />
        </li>
      </ul>
    </Container>
  );
};
