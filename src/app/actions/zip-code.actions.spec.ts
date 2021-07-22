import * as ZipCodesActions from './zip-code.actions';

describe('ZipCodes', () => {
  it('should create an instance', () => {
    expect(new ZipCodesActions.AddZipCode('10001')).toBeTruthy();
  });
});
