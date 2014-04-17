var splice = function(arr, start, numToReplace, replace) {
	var newArray = [];
		for (i = 0; i < (arr.length); i++) {
			if (start >= arr.length) {
				i = arr.length;
				newArray = arr.slice(0);
	
				for (i=3; i<arguments.length; i++) {
					newArray.push(arguments[i]);
				}
			}
			else if (i === start) {
				i = i + numToReplace;
				if (replace) {
					newArray.push(replace);
				}
				// console.log(newArray)
				newArray.push(arr[i]);

			}	
			else {
				// console.log('else')
				newArray.push(arr[i]); 
			}
				// console.log('b' , newArray)

		}
		return newArray;	 
	// };
};