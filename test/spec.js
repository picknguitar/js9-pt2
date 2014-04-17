describe('splice', function() {
	it('should remove elements from an array', function() {
		expect(splice(['a','b','c','d','e'], 2, 2)).toEqual(['a','b','e']);
	});
	// it('should remain unchanged', function() {
	// 	expect(a).toEqual(['a','b','c','d','e']);
	// });
	it('should insert an item with the fourth argument', function() {
		expect(splice(['a','b','c','d','e'], 1, 2, 'z')).toEqual(['a','z','d','e']);
	});
	it('should insert elements without removing anything', function() {
		expect(splice(['a','b','c','d','e'], 1, 0, 'z')).toEqual(['a','z','b','c','d','e']);
	});
	it('should insert at the end', function() {
		expect(splice(['a','b','c'], 99, 0, 'z')).toEqual(['a','b','c','z']);
		expect(splice(['a','b','c'], 99, 1, 'z')).toEqual(['a','b','c','z']);
	});
	it('should accept arbitrary number of multiple arguments', function() {
		expect(splice(['a','b','c'], 99, 1, 'x','y','z')).toEqual(['a','b','c','x','y','z']);
	});
});

