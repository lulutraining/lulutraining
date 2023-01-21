import { PrevNextButton } from 'components';
import { Container, CustomLinearProgress, CustomToggleButtonGroup } from 'styles/activeCheck.style';
import { useEffect, useState } from 'react';
import { Box, ToggleButton } from '@mui/material';
import { db } from 'apis/database';
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
  const [actPage, setActPage] = useState(0);
  const [progress, setProgress] = useState(100 / questionList.length);
  const [answer, setAnswer] = useState(0);
  const [userAnswer, setUserAnswer] = useState<UserAnswer>({
    answer1: 0,
    answer2: 0,
    answer3: 0,
    answer4: 0,
    answer5: 0,
  });

  const handleChangeAnswer = (event: React.MouseEvent<HTMLElement>, answerCount: number) => {
    setAnswer(answerCount);
    setUserAnswer({ ...userAnswer, [`answer${actPage + 1}`]: answerCount });
  };

  const onClickPrev = () => {
    setActPage((prev) => prev - 1);
  };

  const onClickNext = async () => {
    if (answer === 0) {
      return alert('답을 선택해주세요.');
    }

    if (actPage === questionList.length - 1) {
      if (typeof window !== undefined) {
        const user = localStorage.getItem('oz-user');
        if (user) {
          try {
            await db.activeWrite({
              collectionName: 'users',
              documentName: user,
              active: userAnswer,
            });
          } catch (error) {
            if (error instanceof FirebaseError) {
              console.log(error);
            }
          }
        }
      }
    } else {
      setActPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setProgress((100 / questionList.length) * (actPage + 1));
    setAnswer(userAnswer[`answer${actPage + 1}`]);
  }, [actPage, userAnswer]);

  return (
    <Container>
      <div className="activecheck__progress">
        <div className="activecheck__progress-text">
          질문의 답을 선택해주세요 🚀
          <ul>
            <li>{actPage + 1}</li>
            <li>/</li>
            <li>{questionList.length}</li>
          </ul>
        </div>
        <Box sx={{ width: '100%' }}>
          <CustomLinearProgress variant="determinate" value={progress} />
        </Box>
      </div>

      <section>
        <h2>Q. {questionList[actPage].question}</h2>
        <CustomToggleButtonGroup
          orientation="vertical"
          defaultValue={userAnswer[`answer${actPage + 1}`]}
          value={answer}
          exclusive
          onChange={handleChangeAnswer}
        >
          {questionList[actPage].answer.map((list: AnswerProps) => (
            <ToggleButton className="answer-button" value={list.count} key={list.count}>
              {list.text}
            </ToggleButton>
          ))}
        </CustomToggleButtonGroup>
      </section>

      <PrevNextButton
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
        nextButtonType={'button'}
        prevBtnVisible={actPage !== 0 ? true : false}
      />
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
