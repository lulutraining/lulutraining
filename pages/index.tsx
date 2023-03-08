import { Header, Thumb } from 'components';
import { db } from 'apis/database';
import { CourseLevel, ResponseCours } from 'types/training';
import { DEFAULT_LEVEL } from 'consts';
import { Container, StyledTab } from 'styles/home.style';
import { Tabs } from '@mui/material';
import { useState } from 'react';
interface HomeStaticProps {
  commonSense: string[];
  recommendCourse: ResponseCours[];
  courses: Courses;
}

interface Courses {
  basic: ResponseCours[];
  intermediate: ResponseCours[];
  advanced: ResponseCours[];
}

export default function Home(props: HomeStaticProps) {
  const { commonSense, recommendCourse, courses } = props;
  const [currentTab, setCurrentTab] = useState<CourseLevel>('basic');

  const handleChangeTab = (event: React.SyntheticEvent, value: CourseLevel) => {
    setCurrentTab(value);
  };

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
              {recommendCourse.map((course, i) => (
                <li key={course.title} className="recommendation-thumb">
                  <Thumb
                    url={course.big_thumb}
                    width={266}
                    height={261}
                    thumbInfo={recommendCourse[i]}
                    level="basic"
                  />
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
                  <Thumb
                    url={course.small_thumb}
                    width={356}
                    height={120}
                    thumbInfo={courses[currentTab][i]}
                    level={currentTab}
                  />
                </li>
              ))}
            </ul>
          </>
        </section>
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const dailyCommonSense = await db.read('dailyCommonSense');
  let commonSense: string[] = [];
  // recommendCourse부분은 활동량 체크 pr 머지되면 하기
  const recommendCourse = await db.readDoc({
    collectionName: 'course',
    documentName: 'basic',
  });
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
      recommendCourse: recommendCourse.data()['list'],
      courses: {
        basic: basicCourse.data()['list'],
        intermediate: intermediateCourse.data()['list'],
        advanced: advancedCourse.data()['list'],
      },
    },
  };
};
