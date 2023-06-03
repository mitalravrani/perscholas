// NESTED IF STATEMENT
// Create a num variable
const num = 101;
// Check that num is positive
if (num > 0) {
  // Also check that num is greater than 100
  if (num > 100) {
    console.log(`${num} is positive and greater than a 100`);
  } else if (num < 100) {
    // Check that num is positive
    //  Also check that num is less than 100
    console.log(`${num} is positive but less than a 100`);
  }
} else {
  // Check that num is negative
  console.log(`${num} is a negative number`);
}