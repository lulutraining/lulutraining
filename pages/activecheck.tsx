import {
  Container,
  CustomButton,
  CustomLinearProgress,
  CustomToggleButtonGroup,
} from 'styles/activeCheck.style';
import basicImage from '/public/images/activecheck/basic.png';
import intermediateImage from '/public/images/activecheck/intermediate.png';
import advencedImage from '/public/images/activecheck/advenced.png';
import { Loader } from 'components';
import { db } from 'apis/database';
import { useForm } from 'react-hook-form';
import { Box, ToggleButton } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FirebaseError } from 'firebase/app';

interface UserAnswer {
  [answer: string]: number;
}

interface QuestionListProps {
  question: string;
  answer: AnswerProps[];
}

interface AnswerProps {
  count: number;
  text: string;
}

const ActiveCheck = ({ questionList }: { questionList: QuestionListProps[] }) => {
  const router = useRouter();
  const [userAnswerCount, setUserAnswerCount] = useState(0);
  const [progress, setProgress] = useState(100 / questionList.length);
  const [userAnswer, setUserAnswer] = useState<UserAnswer>({
    answer1: 0,
    answer2: 0,
    answer3: 0,
    answer4: 0,
    answer5: 0,
  });
  const [isAnswerCompleted, setIsAnswerCompleted] = useState(false);
  const [isSubmission, setIsSubmission] = useState(false);
  const [userActiveScore, setUserActiveScore] = useState('');
  const { handleSubmit } = useForm();

  const handleChangeAnswer = (answerCount: number, index: number) => {
    setUserAnswer({ ...userAnswer, [`answer${index + 1}`]: !answerCount ? 0 : answerCount });
  };

  const onVailActiveCheck = async () => {
    if (!isAnswerCompleted) {
      return alert('모든 질문에 답을 선택해주세요.');
    }

    setIsSubmission(true);
    if (typeof window !== undefined) {
      const user = localStorage.getItem('oz-user');
      if (user) {
        try {
          await db.activeWrite({
            collectionName: 'users',
            documentName: user,
            active: userAnswer,
          });
          const totalScore = Object.values(userAnswer).reduce((a, b) => a + b);
          setUserActiveScore(totalScore <= 10 ? '초급' : totalScore <= 15 ? '중급' : '고급');
        } catch (error) {
          if (error instanceof FirebaseError) {
            console.log(error);
          }
        }
      }
    }
  };

  useEffect(() => {
    const count = Object.values(userAnswer).filter((answer) => answer !== 0).length;
    setUserAnswerCount(count);
    setProgress((100 / questionList.length) * count);
    if (count === questionList.length) {
      setIsAnswerCompleted(true);
    } else {
      setIsAnswerCompleted(false);
    }
  }, [userAnswer]);

  return (
    <Container>
      {isSubmission ? (
        userActiveScore === '' ? (
          <Loader loaderText="분석중입니다"></Loader>
        ) : (
          <>
            <p className="activecheck__result-title">
              룰루트레이닝
              <br />
              운동코스를 추천해줄게요
            </p>
            <div className="activecheck__result-banner">
              {
                {
                  초급: <Image src={basicImage} alt={userActiveScore} priority />,
                  중급: <Image src={intermediateImage} alt={userActiveScore} priority />,
                  고급: <Image src={advencedImage} alt={userActiveScore} priority />,
                }[userActiveScore]
              }
              <span>{userActiveScore}</span>
            </div>
            <CustomButton variant="contained" type="button" onClick={() => router.push('/')}>
              운동하러 가기
            </CustomButton>
          </>
        )
      ) : (
        <>
          <div className="activecheck__progress">
            <div className="activecheck__progress-text">
              질문의 답을 선택해주세요 🚀
              <ul>
                <li>{userAnswerCount}</li>
                <li>/</li>
                <li>{questionList.length}</li>
              </ul>
            </div>
            <Box sx={{ width: '100%' }}>
              <CustomLinearProgress variant="determinate" value={progress} />
            </Box>
          </div>
          <form onSubmit={handleSubmit(onVailActiveCheck)}>
            {questionList.map((list, index) => {
              return (
                <section key={index}>
                  <h2>Q. {list.question}</h2>
                  <CustomToggleButtonGroup
                    orientation="vertical"
                    defaultValue={userAnswer[`answer${index + 1}`]}
                    value={userAnswer[`answer${index + 1}`]}
                    exclusive
                    onChange={(event, answerCount: number) =>
                      handleChangeAnswer(answerCount, index)
                    }
                  >
                    {list.answer.map((answerList) => (
                      <ToggleButton
                        className="answer-button"
                        value={answerList.count}
                        key={answerList.count}
                      >
                        {answerList.text}
                      </ToggleButton>
                    ))}
                  </CustomToggleButtonGroup>
                </section>
              );
            })}

            <CustomButton variant={isAnswerCompleted ? 'contained' : 'outlined'} type="submit">
              완료
            </CustomButton>
          </form>
        </>
      )}
    </Container>
  );
};

export async function getStaticProps() {
  const list = await db.read('activeQuestion');
  let questionList;
  list.forEach((doc) => {
    questionList = doc.data()['list'];
  });

  return { props: { questionList } };
}

export default ActiveCheck;
