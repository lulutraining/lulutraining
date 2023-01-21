import { Splash } from 'components';
import { Container } from 'styles/signupCheck.style';
import textPoint from 'public/images/text-point.png';
import { Button } from '@mui/material';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CheckNext = () => {
  const router = useRouter();
  const { check } = router.query;
  const [guideText, setGuideText] = useState(['']);
  const [isComplete, setIsComplete] = useState(false);
  const [isBodyCheck, setIsBodyCheck] = useState(true);

  const onMoveNext = () => {
    isBodyCheck ? router.push('/bodycheck') : router.push('/activecheck');
  };
  const onSkipCheck = () => {
    isBodyCheck ? router.push('/signup/active-check') : setIsComplete(true);
  };

  useEffect(() => {
    if (check === 'body-check') {
      setIsBodyCheck(true);
      setGuideText(['신체정보를 기입해주시면', '회원님의 기초대사량을', '측정해드립니다']);
    } else if (check === 'active-check') {
      setIsBodyCheck(false);
      setGuideText(['활동량을 알려주시면', '회원님께 알맞은 운동 코스를 ', '추천해드립니다']);
    }
    if (isComplete) {
      setTimeout(() => router.push('/'), 3300);
    }
  }, [check, isComplete]);

  return (
    <Container isbodycheck={isBodyCheck}>
      {isComplete ? (
        <Splash />
      ) : (
        <>
          <div className="check__guide-text">
            <Image src={textPoint} alt="point-illust" />
            {guideText.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
          <div className="check__button">
            <Button type="button" onClick={onMoveNext}>
              입력하기
            </Button>
            <Button type="button" onClick={onSkipCheck}>
              건너뛰기
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default CheckNext;

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  if (params?.check !== 'body-check' && params?.check !== 'active-check') {
    return {
      notFound: true,
    };
  }
  return {
    props: {},
  };
};
