console.log("quick test");

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Log result of isSum50
console.log(`The sum equals 50: ${isSum50}`);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Log result of isTwoOdd
console.log(`Two or more values are odd: ${isTwoOdd}`);


// Check three: no number larger than 25
// Instead of using the ! to make this variable true,
// we will check if the opposite condition is true:
// each value less than or equal to 25
const isLessThanOrEqual25 = (n1 <= 25) && (n2 <= 25) && (n3 <= 25) && (n4 <= 25);

// Log result of isLessThanOrEqual25
console.log(`Each value is less than or equal to 25: ${isLessThanOrEqual25}`);



// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Log result of isUnique
console.log(`Each value is unique: ${isUnique}`);


// Modulus 5 equal 0 lets us know the value is divisible by 5
// All values must have no remainder to be divisible by 5
// so the & operator is needed
const isDivisibleBy5 = (n1 % 5 == 0) && (n2 % 5 == 0) && (n3 % 5 == 0) && (n4 % 5 == 0);

// Log result of isDivisibleBy5
console.log(`Each value is divisible by 5: ${isDivisibleBy5}`);


// Compare first value to last value
// First value must be evaluated as more than the
// the last value
const isNum1Larger = n1 > n4;

// Log result of isNum1Larger
console.log(`First value is larger than last value: ${isNum1Larger}`);

// Arithmetic chain using parentheseses
// to nest the expression into one
// statement
const mathExpression = ((n2 - n1) * n3) % n4;

// Log result of mathExpression
console.log(`((n2 - n1) * n3) % n4: ${mathExpression}`);




// Here, we put the results into a single variable 
// for convenience. Note: I have changed isOver25
// to isLessThan25 so the results will be true
// and there is no longer a need for ! operator.

const isValid = isSum50 && isTwoOdd && isLessThanOrEqual25 && isUnique && isDivisibleBy5;
// Checks if all conditions are met

// Finally, log the results.
console.log(`All conditions met: ${isValid}`);