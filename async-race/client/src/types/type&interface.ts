export type Sort = 'id' | 'wins' | 'time';
export type Order = 'ASC' | 'DESC';
export type StartStop = 'started' | 'stopped';

export type SortObj = {
  sort: Sort,
  order: Order,
  page: number
};
export type Path = {
  [key: string]: string;
};

export type CarParam = {
  color: string,
  name: string,
  id: number,

};
export type GetCar = CarParam[];

export type WinParam = {
  time: string,
  id: number,
  wins: number
};

export type StartStopResponse = {
  'velocity': number,
  'distance': number
};

export type DriveResponse = {
  'velocity': number,
  'distance': number
};
