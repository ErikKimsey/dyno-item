/**
 * My other computer
 * is your computer.
 * auth. ODD TREATMENT
 */

function getComputer(yourName) {
  console.log(`My other computer is ${yourName}'s computer.`);
  setTimeout(() => {
    justKidding(yourName);
  }, 1000);
}

function justKidding(yourName) {
  return `Just kidding. ${yourName}'s computer is gross.`;
}

console.log(getComputer('Erik'));
