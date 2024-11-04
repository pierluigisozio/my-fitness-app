export interface IMeal {
  user: string;
  title: string;
  calories: string | number;
  date: Date;
}

export interface IExercise {
  user: string;
  name: string;
  duration: string | number;
  calories: string | number;
  date: Date;
}

export interface IUserProgress {
  user: string;
  weight: string | number;
  bodyFat: string | number;
  date: Date;
}
