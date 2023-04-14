import { ResponseCourse } from 'types/training';
import { authState } from 'store/atoms';
import { db } from 'apis/database';
import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { BookmarkBorderOutlined, BookmarkOutlined } from '@mui/icons-material';
import { Checkbox } from '@mui/material';

export const Bookmark = ({ course }: { course: ResponseCourse }) => {
  const [userInfo, setUserInfo] = useRecoilState(authState);
  let markedId = userInfo.bookmark.map((value) => value.youtube_id);
  const handleClickBookmark = async (event: ChangeEvent<HTMLInputElement>) => {
    let bookmark = userInfo.bookmark;
    if (event.target.checked) {
      bookmark = [...userInfo.bookmark, course];
    } else {
      bookmark = userInfo.bookmark.filter((value) => value.youtube_id !== course.youtube_id);
    }
    try {
      await db.bookmarkWrite({
        collectionName: 'users',
        documentName: userInfo.uid,
        bookmark,
      });
      setUserInfo((prev) => {
        return { ...prev, bookmark: [...bookmark] };
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="thumb__bookmark">
      <Checkbox
        onChange={handleClickBookmark}
        icon={<BookmarkBorderOutlined />}
        checked={markedId.includes(course.youtube_id) ? true : false}
        checkedIcon={<BookmarkOutlined />}
      />
    </div>
  );
};
