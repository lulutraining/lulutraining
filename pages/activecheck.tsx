import {
  Container,
  CustomButton,
  CustomLinearProgress,
  CustomToggleButtonGroup,
} from 'styles/activeCheck.style';
import { ActivecheckResult, Loader } from 'components';
import { unAuthorizedCheck } from 'utils/unAuthorizedCheck';
import { DEFAULT_LEVEL } from 'consts';
import { db } from 'apis/database';
import { useForm } from 'react-hook-form';
import { Box, ToggleButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { GetServerSidePropsContext } from 'next';
import cookies from 'next-cookies';
import { useRecoilState } from 'recoil';
import { authState } from 'store/atoms';
import { adminStore } from 'services/admin';

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
  const [{ uid, active }, setUserInfo] = useRecoilState(authState);
  const [userAnswerCount, setUserAnswerCount] = useState(0);
  const [isSubmission, setIsSubmission] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userAnswer, setUserAnswer] = useState<UserAnswer>(active.answer);
  const { handleSubmit } = useForm();

  const handleChangeAnswer = (answerCount: number, index: number) => {
    setUserAnswer((prev) => {
      return { ...prev, [`answer${index + 1}`]: !answerCount ? 0 : answerCount };
    });
  };

  const onVailActiveCheck = async () => {
    if (userAnswerCount !== questionList.length) {
      return alert('모든 질문에 답을 선택해주세요.');
    }

    setIsSubmission(true);
    setIsLoading(true);

    const totalScore = Object.values(userAnswer).reduce((a, b) => a + b);
    const grade =
      totalScore <= 10
        ? DEFAULT_LEVEL.basic
        : totalScore <= 15
        ? DEFAULT_LEVEL.advanced
        : DEFAULT_LEVEL.intermediate;
    try {
      await db.activeWrite({
        collectionName: 'users',
        documentName: uid,
        active: {
          answer: userAnswer,
          grade,
        },
      });
      setUserInfo((prev) => {
        return { ...prev, active: { answer: userAnswer, grade } };
      });

      setIsLoading(false);
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const count = Object.values(userAnswer).filter((answer) => answer !== 0).length;
    setUserAnswerCount(count);
  }, [userAnswer]);

  return (
    <Container>
      {isSubmission ? (
        isLoading ? (
          <Loader loaderText="분석중입니다"></Loader>
        ) : (
          active.grade && <ActivecheckResult grade={active.grade} />
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
              <CustomLinearProgress
                variant="determinate"
                value={(100 / questionList.length) * userAnswerCount}
              />
            </Box>
          </div>
          <form onSubmit={handleSubmit(onVailActiveCheck)}>
            {questionList.map((list, index) => (
              <section key={index}>
                <h2>Q. {list.question}</h2>
                <CustomToggleButtonGroup
                  orientation="vertical"
                  defaultValue={userAnswer[`answer${index + 1}`]}
                  value={userAnswer[`answer${index + 1}`]}
                  exclusive
                  onChange={(event, answerCount) => handleChangeAnswer(answerCount, index)}
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
            ))}

            <CustomButton
              variant={userAnswerCount === questionList.length ? 'contained' : 'outlined'}
              type="submit"
            >
              완료
            </CustomButton>
          </form>
        </>
      )}
    </Container>
  );
};

export default ActiveCheck;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { user } = cookies(context);
  const getQuestion = (await adminStore.doc('activeQuestion/qeustion').get()).data();

  return await unAuthorizedCheck({
    user,
    context,
    propsOption: { questionList: getQuestion?.list },
  });
};
