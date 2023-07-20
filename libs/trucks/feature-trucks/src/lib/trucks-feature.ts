export interface Truck {
  id: number;
  number: number;
  state: string;
}

export const trucks = (): Truck[] => {
  return [
    {
      id: 1,
      number: 1,
      state: 'IL',
    },
    {
      id: 2,
      number: 2,
      state: 'TX',
    },
  ];
};
