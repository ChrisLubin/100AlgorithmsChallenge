function flattenArray(arr: any[]): any[] {
    const result = [];

    flatten(arr);

    function flatten(array: any[]) {
        array.forEach(child => {
            if (Array.isArray(child)) {
                flatten(child);
            } else {
                result.push(child);
            }
        });
    }

    return result;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
