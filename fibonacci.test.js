const fibsRec = require('./fibonacci');

describe('fibonacci', () => {
	test('Sequence of 1', () => {
		expect(fibsRec(1)).toEqual([0]);
	});

	test('Sequence of 8', () => {
		expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
	});
});
