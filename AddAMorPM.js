const suffixAmPm = (h) => `${h%12===0? 12:h%12}${h<12?'am':'pm'}`;
console.log(0, 5, 12, 15, 23);

console.log(suffixAmPm(0)); // '12am'
console.log(suffixAmPm(5));  // '5am'
console.log(suffixAmPm(12)); // '12pm'
console.log(suffixAmPm(15)); // '3pm'
console.log(suffixAmPm(23)); // '11pm'