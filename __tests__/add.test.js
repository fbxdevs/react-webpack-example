// A simple addition test

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2+2).toBe(4);
  });

  it('knows that 2 and 2 does not make 5', () => {
    expect(2+2).not.toBe(5);
  });
});
