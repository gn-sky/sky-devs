export interface Truck {
  id: number;
  number: number;
  city: string;
  state: string;
}

export const trucks = (): Truck[] => {
  return [
    {
      id: 1,
      number: 1,
      city: 'Chicago',
      state: 'IL',
    },
    {
      id: 2,
      number: 2,
      city: 'NYC',
      state: 'NY',
    },
  ];
};
