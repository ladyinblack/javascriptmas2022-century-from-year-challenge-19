// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Century From Year</h1>`;

/**
 * Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
 *
 * Example:
 * - For year = 1905, the output should be centuryFromYear(year) = 20;
 * - For year = 1700, the output should be centuryFromYear(year) = 17
 *
 * HINTS:
 * - Math.floor()
 */
function centuryFromYear(num) {
  // let century = num / 100;
  // let rem = num % 100;
  // if (rem > 0) {
  //   return Math.floor(century + 1);
  // } else {
  //   return century;
  // }

  /* MY OLD SOLUTION OF 2020 */
  if (num % 100 == 0) {
    return num / 100;
  } else {
    return Math.floor(num / 100) + 1;
  }
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(1853));
