function analyzeArray(arr) {
    // Check if arr is an array and has at least one element
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input is not a valid array.');
    }

    // Calculate average, minimum, maximum, and length
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const avg = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const len = arr.length;

    // Return object with properties for average, minimum, maximum, and length
    return { average: avg, min: min, max: max, length: len };
}

module.exports = analyzeArray