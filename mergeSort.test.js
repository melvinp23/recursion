const mergeSort = require('./mergeSort');

describe('Merge sort', () => {
	test('Empty array', () => {
		expect(mergeSort([])).toEqual([]);
	});

	test('Single number in an array', () => {
		expect(mergeSort([73])).toEqual([73]);
	});

	test('Merge sort already sorted array', () => {
		expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
	});

	test('Merge sort 8 random numbers in an array', () => {
		expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
	});

	test('Merge sort huge numbers in an array', () => {
		expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
	});
});
