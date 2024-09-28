function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // Return the index where the target is found
        } else if (arr[mid] < target) {
            low = mid + 1; // Search the right half
        } else {
            high = mid - 1; // Search the left half
        }
    }
    return -1; // Return -1 if the target is not found
}

// Example usage:
const sortedArray = [10, 23, 45, 70, 80, 100];
const targetValue = 70;
const foundIndex = binarySearch(sortedArray, targetValue);

console.log(foundIndex !== -1 ? `Element found at index: ${foundIndex}` : 'Element not found');