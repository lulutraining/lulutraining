export interface ResponseCourse {
  kcal: string;
  time: string;
  title: string;
  big_thumb: string;
  small_thumb: string;
  level: string;
  youtube_id: string;
}

export type CourseLevel = 'basic' | 'intermediate' | 'advanced';
