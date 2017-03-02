describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('numerically sorts an array', function() {
    expect( bubbleSort([5, 1, 7, 3, 4, 9])).toEqual([1, 3, 4, 5, 7, 9]);
  });
  it('returns undefined if inputs are not integers', function() {
    expect( bubbleSort([5, 1, 'c', 3, 4, 9])).toEqual(undefined);
  });
});
