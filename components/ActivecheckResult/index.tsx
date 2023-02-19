import { Container, CustomButton } from './style';
import basicImage from '/public/images/activecheck/basic.png';
import intermediateImage from '/public/images/activecheck/intermediate.png';
import advencedImage from '/public/images/activecheck/advenced.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface ActivecheckResultProps {
  grade: string;
}

export const ActivecheckResult = ({ grade }: ActivecheckResultProps) => {
  const router = useRouter();

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
        {
          {
            초급: <Image src={basicImage} alt={grade} priority />,
            중급: <Image src={intermediateImage} alt={grade} priority />,
            고급: <Image src={advencedImage} alt={grade} priority />,
          }[grade]
        }
        <span>{grade}</span>
      </div>
      <CustomButton variant="contained" type="button" onClick={handleClickGoMain}>
        운동하러 가기
      </CustomButton>
    </Container>
  );
};

export default ActivecheckResult;
