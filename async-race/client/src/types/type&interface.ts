export type Sort = 'id' | 'wins' | 'time';
export type Order = 'ASC' | 'DESC';
export type StartStop = 'started' | 'stopped';

export type Path = {
  [key: string]: string;
};

export type CarParam = {
  color: string,
  id: number,
  name: string
};

export type WinParam = {
  color: string,
  id: number,
  name: string
};

export type StartStopResponse = {
  'velocity': number,
  'distance': number
};

export type DriveResponse = {
  'velocity': number,
  'distance': number
};
