function recursiveSum(num, degree) {
  if (degree === 1) return num;
  if (degree === 0) return 0;
  const result = num * recursiveSum(num, degree - 1);
  return result;
}
console.log(recursiveSum(3, 5));
