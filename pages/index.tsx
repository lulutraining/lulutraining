import { Header, Thumb } from 'components';
import { authState } from 'store/atoms';
import { db } from 'apis/database';
import { CourseLevel, ResponseCourse } from 'types/training';
import { DEFAULT_LEVEL } from 'consts';
import { Container, StyledTab } from 'styles/home.style';
import { Tabs } from '@mui/material';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
interface HomeStaticProps {
  commonSense: string[];
  recommendCourse: ResponseCourse[];
  courses: Courses;
}

interface Courses {
  [key: string]: ResponseCourse[];
}

export default function Home(props: HomeStaticProps) {
  const userInfo = useRecoilValue(authState);
  const { commonSense, courses } = props;
  const [currentTab, setCurrentTab] = useState<CourseLevel>('basic');

  const handleChangeTab = (event: React.SyntheticEvent, value: CourseLevel) => {
    setCurrentTab(value);
  };

  const [userGrade]: string[] = Object.keys(DEFAULT_LEVEL).filter(
    (level) => DEFAULT_LEVEL[level] === userInfo.active.grade
  );

  return (
    <>
      <Header />
      <Container>
        <p className="home__common-sense">
          {commonSense.map((str) => (
            <span key={str}>
              {str}
              <br />
            </span>
          ))}
        </p>
        <section className="recommendation">
          <h3 className="home__section-title">추천 코스</h3>
          <div className="recommendation-thumb-box">
            <ul className="recommendation-thumbs">
              {courses[userGrade].map((course, i) => (
                <li key={course.title} className="recommendation-thumb">
                  <Thumb course={course} width={266} height={261} />
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="courses">
          <h3 className="home__section-title">레벨 코스</h3>
          <>
            <Tabs
              value={currentTab}
              onChange={handleChangeTab}
              TabIndicatorProps={{
                style: { display: 'none' },
              }}
            >
              {Object.keys(DEFAULT_LEVEL).map((level) => (
                <StyledTab key={level} label={level} value={level} />
              ))}
            </Tabs>
            <ul className="courses-thumbs">
              {courses[currentTab].map((course, i) => (
                <li key={course.title} className="courses-thumb">
                  <Thumb course={course} width={356} height={120} />
                </li>
              ))}
            </ul>
          </>
        </section>
      </Container>
    </>
  );
}

export const getServerSideProps = async () => {
  const dailyCommonSense = await db.read('dailyCommonSense');
  let commonSense: string[] = [];
  const basicCourse = await db.readDoc({
    collectionName: 'course',
    documentName: 'basic',
  });
  const intermediateCourse = await db.readDoc({
    collectionName: 'course',
    documentName: 'intermediate',
  });
  const advancedCourse = await db.readDoc({
    collectionName: 'course',
    documentName: 'advanced',
  });

  dailyCommonSense.forEach((doc) => {
    const data = doc.data()['list'];
    const random = Math.random() * data.length;
    commonSense = data[Math.floor(random)].split('/');
  });

  return {
    props: {
      commonSense,
      courses: {
        basic: basicCourse.data()['list'],
        intermediate: intermediateCourse.data()['list'],
        advanced: advancedCourse.data()['list'],
      },
    },
  };
};
