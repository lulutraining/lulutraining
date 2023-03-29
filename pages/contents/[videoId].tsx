import { db } from 'apis/database';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import YouTube from 'react-youtube';
import { Container } from 'styles/contents.style';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ContentsListType {
  id: string;
  course: string;
  title: string;
  kcal: number;
  min: number;
  infoText: string;
  name: string;
  job: string;
  sns: string;
  thumb: string;
}

const Contents = (props: ContentsListType) => {
  const router = useRouter();
  const handleOnClickBackButton = () => {
    router.back();
  };

  return (
    <Container>
      <nav>
        <IconButton id="contents__back" onClick={handleOnClickBackButton}>
          <ArrowBackIcon />
        </IconButton>
      </nav>
      <div id="contents__youtube_wrap">
        <YouTube
          id="contents__youtube"
          videoId={props.id}
          opts={{
            playerVars: {
              rel: 0,
              modestbranding: 1,
              enablejsapi: 1,
            },
          }}
        />
      </div>
      <section id="contents__title">
        <h3>{props.course}</h3>
        <h2>{props.title}</h2>
        <p>
          <span>{props.kcal}</span>kcal / <span>{props.min}</span>min
        </p>
      </section>
      <p id="contents__info">{props.infoText}</p>
      <section id="contents__instructor">
        <div id="instructor-profile">
          <img src={props.thumb} alt="가이드 프로필 이미지" />
        </div>
        <div id="instructor-info">
          <h3>가이드</h3>
          <h2>
            <span>{props.name}</span> / {props.job}
          </h2>
          <p>{props.sns}</p>
        </div>
      </section>
    </Container>
  );
};

export default Contents;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const params = context.query;
  const contentsList = (
    await db.readDoc({ collectionName: 'contentsList', documentName: 'list' })
  ).data().contents;

  const contentsObj = contentsList.filter((list: ContentsListType) => list.id === params.videoId);

  return { props: { ...contentsObj[0] } };
};
