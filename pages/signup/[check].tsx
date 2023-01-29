import { Splash } from 'components';
import { Container } from 'styles/signupCheck.style';
import logoImage from 'public/images/logo.png';
import { Button } from '@mui/material';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CheckIsWritePersonalInfo = () => {
  const router = useRouter();
  const { check } = router.query;
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
    } else if (check === 'active-check') {
      setIsBodyCheck(false);
    }
  }, [check]);

  return (
    <Container>
      {isComplete ? (
        <Splash />
      ) : (
        <>
          <Image src={logoImage} alt="lulutraining-image" />
          <div className="check__guide-text">
            {check === 'body-check' ? (
              <>
                <p>신체정보를 기입해주시면</p>
                <p>회원님의 기초대사량을</p>
                <p>측정해드립니다</p>
              </>
            ) : (
              <>
                <p>활동량을 알려주시면</p>
                <p>회원님께 알맞은 운동 코스를</p>
                <p>추천해드립니다</p>
              </>
            )}
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

export default CheckIsWritePersonalInfo;

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
