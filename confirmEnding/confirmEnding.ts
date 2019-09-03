function confirmEnding(str: string, target: string) {
   const strLen = str.length;
   const targetLen = target.length;

   return str.substr(strLen - targetLen, targetLen) === target ? true : false;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));