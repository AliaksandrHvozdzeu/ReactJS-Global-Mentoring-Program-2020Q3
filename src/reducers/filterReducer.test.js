import filterReducer from './filterReducer';

describe('filterReducer', () => {
  test('when filtering by genre then genre value populated', () => {
    const selectedGenre = 'Comedy';
    const state = filterReducer(null, {
      type: "filter/genre",
      payload: selectedGenre,
    });
    expect(state.genre).toEqual(selectedGenre);
  });

  test('when filtering by order then order value populated', () => {
    const orderByValue = 'test';
    const state = filterReducer(null, {
      type: "filter/order",
      payload: orderByValue,
    });

    expect(state.order).toEqual(orderByValue);
  });

  test('when unsupported type specified then nothing changed', () => {
    const oldState = {test: 'test'};
    const state = filterReducer(oldState, {
      type: 'INVALID',
      payload: 'invalidValue',
    });

    expect(state).toEqual(oldState);
  });
});
