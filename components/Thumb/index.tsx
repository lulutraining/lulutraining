import { ResponseCours } from 'types/training';
import { Container } from './style';
import Image from 'next/image';
import { Checkbox } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LooksIcon from '@mui/icons-material/Looks';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

interface ThumbProps {
  url: string;
  width: number;
  height: number;
  thumbInfo: ResponseCours;
  level: string;
}

export const Thumb = (props: ThumbProps) => {
  const { url, width, height, thumbInfo, level } = props;

  return (
    <Container>
      <div className="thumb__box">
        <div className="thumb__utils">
          <div className="thumb__info">
            <ul className="thumb__info-box">
              <li className="thumb__info-detail thumb__info-time">
                <AccessTimeIcon />
                <span>{thumbInfo.time}min</span>
              </li>
              <li className="thumb__info-detail">
                <LooksIcon />
                <span>{level}</span>
              </li>
              <li className="thumb__info-detail">{thumbInfo.kcal}kcal</li>
            </ul>
          </div>
          <div className="thumb__bookmark">
            <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
          </div>
        </div>
        <Image src={url} alt="thumbnail" priority width={width} height={height} />
        <p className="thumb__title">{thumbInfo.title}</p>
      </div>
    </Container>
  );
};
