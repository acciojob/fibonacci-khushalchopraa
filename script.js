function fibonacci(num) {
// your code here
	 if (num <= 0) {
        return "Input should be a positive integer";
    } else if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    } else {
        let a = 0, b = 1;
        for (let i = 2; i < num; i++) {
            let temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }

}

module.exports = fibonacci;
