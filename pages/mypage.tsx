import { Header } from 'components';
import { authState } from 'store/atoms';
import { Container } from 'styles/mypage.style';
import { db } from 'apis/database';
import { ResponseCourse } from 'types/training';
import { unAuthorizedCheck } from 'utils/unAuthorizedCheck';
import Image from 'next/image';
import { GetServerSidePropsContext } from 'next';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Checkbox, Tab } from '@mui/material';
import { AccessTime, Bookmark, BookmarkBorder, Looks } from '@mui/icons-material';
import { TabList, TabPanel, TabContext } from '@mui/lab';
import { useRecoilValue } from 'recoil';
import cookies from 'next-cookies';

const MyPage = () => {
  const userInfo = useRecoilValue(authState);
  const [value, setValue] = useState('badge');
  const [basicMetabolic, setBasicMetabolic] = useState(0);
  const [courseList, setCourseList] = useState<ResponseCourse[]>([]);
  const handleChangeTab = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const calculateBasicMetabolic = () => {
    const {
      body: { gender, weight, height, age },
    } = userInfo;
    if (gender === 'female') {
      setBasicMetabolic(655.1 + 9.56 * weight + 1.85 * height - 4.68 * age);
    } else {
      setBasicMetabolic(66.47 + 13.75 * weight + 5 * height - 6.76 * age);
    }
  };
  const getCourse = async () => {
    const data = (
      await db.readDoc({
        collectionName: 'course',
        documentName: 'advanced',
      })
    ).data();
    setCourseList(data.list);
  }; // 운동저장기능 구현시 수정
  useEffect(() => {
    calculateBasicMetabolic();
    getCourse();
  }, []);

  return (
    <Container>
      <Header />
      <section className="mypage__section-title">
        <h3>
          <span>{userInfo.displayName}</span> 님
        </h3>
      </section>
      <ul className="mypage__section-info">
        <li>
          <p>0kcal</p>
          <h4>소모칼로리</h4>
        </li>
        <li>
          <p>{Math.floor(basicMetabolic)}kcal</p>
          <h4>기초대사량</h4>
        </li>
        <li>
          <p>{userInfo.active.grade}</p>
          <h4>추천코스</h4>
        </li>
      </ul>
      <Box className="mypage__tab" sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: '#231F20' }}>
            <TabList onChange={handleChangeTab}>
              <Tab label="뱃지" value="badge" />
              <Tab label="저장한 운동" value="saved-list" />
            </TabList>
          </Box>
          <TabPanel className="mypage__tabPanel-badge" value="badge">
            <ul>
              {
                Array.from({ length: 10 }, (_, v) => v).map((_, idx) => (
                  <li key={idx}>
                    <span>?</span>
                  </li>
                ))
                // 뱃지기준 및 종류 확정 후 수정
              }
            </ul>
          </TabPanel>
          <TabPanel className="mypage__tabPanel-savedList" value="saved-list">
            <ul>
              {courseList.map((list: ResponseCourse, idx: number) => (
                <li key={idx}>
                  <div className="savedList__thumb">
                    <Image src={list.big_thumb} width={112} height={112} alt={list.title} />
                    <div className="savedList__thumb-info">
                      <p>{list.title}</p>
                      <ul className="thumb__info-box">
                        <li className="thumb__info-detail thumb__info-time">
                          <AccessTime />
                          <span>{list.time}min</span>
                        </li>
                        <li className="thumb__info-detail">
                          <Looks />
                          <span>{list.level}</span>
                        </li>
                        <li className="thumb__info-detail">{list.kcal}kcal</li>
                      </ul>
                    </div>
                  </div>
                  <div className="savedList__thumb-bookmark">
                    <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} defaultChecked />
                  </div>
                </li>
              ))}
            </ul>
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};
export default MyPage;

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { user } = cookies(context);
  return await unAuthorizedCheck({ user, context });
};
