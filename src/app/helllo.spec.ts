  describe('Hello Test', () => {
    let expectedTrue = '';
    let expectedFalse = '';
    let expression = null;

    beforeEach(()=>{
     expectedTrue = 'HelloTest';
     expectedFalse= 'Hakunamatata';
     expression = new RegExp(/^Hello/);
    });

    afterAll(()=>{
        expectedTrue = '';
        expectedFalse= '';
        expression = null;
    })

  it('should Test for matching values', () => {
    expect("HelloTest").toBe(expectedTrue);
  });
  it('should test for not matching values', () => {
    expect("HelloTest").not.toBe(expectedFalse);
  });
  it('should match for start', () => {
    expect("HelloTest").toMatch(expression);
  });

});
