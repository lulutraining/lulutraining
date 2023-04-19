import { ResponseCourse } from 'types/training';
import { Container } from './style';
import Image from 'next/image';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LooksIcon from '@mui/icons-material/Looks';
import { useRouter } from 'next/router';
import { Bookmark } from 'components/Bookmark';
interface ThumbProps {
  course: ResponseCourse;
  width: number;
  height: number;
}

export const Thumb = (props: ThumbProps) => {
  const { course, width, height } = props;
  const { time, level, kcal, youtube_id, title, big_thumb, small_thumb } = course;
  const router = useRouter();
  const handleClickBanner = (id: string) => {
    router.push(`/contents/${id}`);
  };

  return (
    <Container>
      <div className="thumb__box">
        <div className="thumb__utils">
          <div className="thumb__info">
            <ul className="thumb__info-box">
              <li className="thumb__info-detail thumb__info-time">
                <AccessTimeIcon />
                <span>{time}min</span>
              </li>
              <li className="thumb__info-detail">
                <LooksIcon />
                <span>{level}</span>
              </li>
              <li className="thumb__info-detail">{kcal}kcal</li>
            </ul>
          </div>
          <Bookmark course={course} />
        </div>
        <Image
          onClick={() => handleClickBanner(youtube_id)}
          src={width === 266 ? big_thumb : small_thumb}
          alt="thumbnail"
          priority
          width={width}
          height={height}
        />
        <p className="thumb__title">{title}</p>
      </div>
    </Container>
  );
};
