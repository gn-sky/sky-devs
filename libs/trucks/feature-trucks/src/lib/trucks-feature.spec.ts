import { Truck, trucks } from './trucks-feature';

describe('trucks', () => {
  it('should return a list of trucks', () => {
    const list: Truck[] = trucks();
    expect(list.length).toBeGreaterThan(0);
  });
  it('element should have number & state properties', () => {
    const truck: Truck = trucks()[0];
    expect(truck.number).toBeDefined();
    expect(truck.state).toBeDefined();
  });
});
