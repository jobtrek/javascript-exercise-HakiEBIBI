/**
 * @param {number} diameter
 * @return {number} sphere volume
 */
export function computeSphereVolume(diameter) {
  // Write your code here
  if (typeof diameter !== 'number' || isNaN(diameter) || diameter < 0) {
    throw new Error("not a number")
  }
  const radius = diameter / 2
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  return volume;

}

/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */
export function roundNumberToOneDecimals(n) {
  // Write your code here
  if (typeof n !== 'number' || isNaN(n)) {
    throw new Error("not a number")
  }
  var rounded = Math.round(n * 10) / 10
  return rounded
}
/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */
export function computeAverage(grades) {
  // Write your code here
  if (!Array.isArray(grades) || !grades.every(item => typeof item === 'number' && !isNaN(item))) {
    throw new Error("not a number")
  }
  var total = 0;
  for (var i = 0; i < grades.length; i++) {
    total += grades[i];
  }
  var avg = total / grades.length;

  return avg

}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */
export function roundedAverage(grades) {
  // Write your code here
  if (!Array.isArray(grades) || !grades.every(item => typeof item === 'number' && !isNaN(item))) {
    throw new Error("Input must be an array of numbers");
  }

  let total = 0;
  for (let i = 0; i < grades.length; i++) {
    total += grades[i];
  }

  let avg = total / grades.length;
  avg = Math.round(avg * 10) / 10;

  return avg;
}
