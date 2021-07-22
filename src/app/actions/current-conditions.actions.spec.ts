import * as CurrentConditionsActions from './current-conditions.actions';

describe('CurrentConditions', () => {
  it('should create an instance', () => {
    expect(new CurrentConditionsActions.LoadCurrentConditionsLoaded()).toBeTruthy();
  });
});
