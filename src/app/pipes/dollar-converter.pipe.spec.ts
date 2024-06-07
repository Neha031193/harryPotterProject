import { ConvertToDollarPipe } from './dollar-converter.pipe';

describe('ConvertToDollarPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertToDollarPipe();
    expect(pipe).toBeTruthy();
  });
});
