function findClosestPair(numbers: number[], sum: number): number {
    let closestPair;

   for (let i = 0; i < numbers.length - 1; i++) {
       for (let j = i + 1; j < numbers.length; j++) {
           const total = numbers[i] + numbers[j];

           if (!closestPair && total === sum) {
               closestPair = j - i;
               break;
           }

           if (total === sum && j - i < closestPair) {
               closestPair = j - i;
           }
       }
   }

   if (closestPair) {
       return closestPair;
   } else {
       return -1;
   }
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));