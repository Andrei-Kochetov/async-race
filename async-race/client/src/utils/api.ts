import * as types from '../types/type&interface';

const path:types.Path = {
  apiUrl: 'http://127.0.0.1:3000',
  garage: '/garage',
  engine: '/engine',
  winners: '/winners',
};

export const getCars = async (page:number = 1, limit:number = 10):Promise<types.CarParam[]> => {
  // .headers.get('X-Total-Count')
  const response = await fetch(`${path.apiUrl}${path.garage}?_page=${page}&_limit=${limit}`);
  // console.log(response)
  const cars = await response.json();
  return cars;
};

export const getWinners = async (page?:number, limit?:number, sort?:types.Sort, order?:types.Order):
Promise<types.WinParam[]> => {
  // .headers.get('X-Total-Count')
  const response = await fetch(`${path.apiUrl}${path.winners}?_page=${page}&_limit=${limit}&_sort${sort}&_order${order}`);
  // console.log(response)
  const winners = await response.json();
  return winners;
};

export const getCar = async (id:number):Promise<types.CarParam[]> => {
  const response = await fetch(`${path.apiUrl}${path.garage}?id=${id}`);
  const car = await response.json();
  return car;
};
export const getTotalCount = async ():Promise<string> => {
    const response = await fetch(`${path.apiUrl}${path.garage}?_limit=10`);
    const totalCount = await response.headers.get('X-Total-Count')!;
    return totalCount;
  };
 

export const getWinner = async (id:number): Promise<types.WinParam[]> => {
  const response = await fetch(`${path.apiUrl}${path.winners}?id=${id}`);
  const winner = await response.json();
  return winner;
};

export const createCar = async (name:string, color:string): Promise<types.CarParam> => {
  const response = await fetch(`${path.apiUrl}${path.garage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, color }),
  });
  const car = await response.json();
  return car;
};

export const createWinner = async (id:number, wins: number, time:number):
Promise<types.WinParam> => {
  const response = await fetch(`${path.apiUrl}${path.winners}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, wins, time }),
  });
  const winner = await response.json();
  return winner;
};

export const deleteCar = async (id:number): Promise<{}> => {
  const response = await fetch(`${path.apiUrl}${path.garage}/${id}`, { method: 'DELETE' });
  const car = await response.json();
  return car;
};

export const deleteWinner = async (id:number): Promise<{}> => {
  const response = await fetch(`${path.apiUrl}${path.winners}/${id}`, { method: 'DELETE' });
  const winner = await response.json();
  return winner;
};

export const updateCar = async (id:number, name:string, color:string):Promise<types.CarParam> => {
  const response = await fetch(`${path.apiUrl}${path.garage}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, color }),
  });
  const car = await response.json();
  return car;
};

export const updateWinner = async (id:number, wins: number, time:number):
Promise<types.WinParam> => {
  const response = await fetch(`${path.apiUrl}${path.winners}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ wins, time }),
  });
  const winner = await response.json();
  return winner;
};

export const startCar = async (id:number):
Promise<types.StartStopResponse> => {
  const response = await fetch(`${path.apiUrl}${path.engine}?id=${id}&status=started`, { method: 'PATCH' });
  const startStopResponse = await response.json();
  return startStopResponse;
};
export const stopCar = async (id:number):
Promise<types.StartStopResponse> => {
  const response = await fetch(`${path.apiUrl}${path.engine}?id=${id}&status=stopped`, { method: 'PATCH' });
  const startStopResponse = await response.json();
  return startStopResponse;
};

export const driveCar = (id:number) => {
  const response =  fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, { method: 'PATCH' })
    .catch(()=>{

    })

};

/* export const driveCar = async (id:number):Promise<types.DriveResponse> => {
  const response = await fetch(`${path.apiUrl}${path.engine}?id=${id}&status=drive`, { method: 'PATCH' });
  const driveResponse = await response.json();
  return driveResponse;
}; */

/* export const startCar = async (id:number):
Promise<types.StartStopResponse> => {
  const response = await fetch(`${path.apiUrl}${path.engine}?id=${id}&status=started`, { method: 'PATCH' });
  const startStopResponse = await response.json();
  return startStopResponse;
};
export const stopCar = async (id:number):
Promise<types.StartStopResponse> => {
  const response = await fetch(`${path.apiUrl}${path.engine}?id=${id}&status=stopped`, { method: 'PATCH' });
  const startStopResponse = await response.json();
  return startStopResponse;
};

export const driveCar = async (id:number):Promise<types.DriveResponse> => {
  const response = await fetch(`${path.apiUrl}${path.engine}?id=${id}&status=drive`, { method: 'PATCH' });
  const driveResponse = await response.json();
  return driveResponse;
};

 */