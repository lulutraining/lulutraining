import { Container, CustomButton } from './style';
import basicImage from '/public/images/activecheck/basic.png';
import intermediateImage from '/public/images/activecheck/intermediate.png';
import advancedImage from '/public/images/activecheck/advanced.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { DEFAULT_LEVEL } from 'consts';

interface ActivecheckResultProps {
  grade: string;
}

export const ActivecheckResult = ({ grade }: ActivecheckResultProps) => {
  const router = useRouter();
  const imgUrl = {
    [DEFAULT_LEVEL.basic]: basicImage,
    [DEFAULT_LEVEL.advanced]: advancedImage,
    [DEFAULT_LEVEL.intermediate]: intermediateImage,
  };
  const handleClickGoMain = () => {
    router.push('/');
  };

  return (
    <Container>
      <p className="activecheck__result-title">
        룰루트레이닝
        <br />
        운동코스를 추천해줄게요
      </p>
      <div className="activecheck__result-banner">
        <Image src={imgUrl[grade]} alt={grade} priority />
        <span>{grade}</span>
      </div>
      <CustomButton variant="contained" type="button" onClick={handleClickGoMain}>
        운동하러 가기
      </CustomButton>
    </Container>
  );
};

export default ActivecheckResult;
