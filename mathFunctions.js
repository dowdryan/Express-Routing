function getMean(nums) {
    let numsArray = nums.map(str => parseInt(str))
    let sum = 0
    for (let i = 0; i < numsArray.length; i++) {
        sum = sum + numsArray[i] 
    }
    let result = {
        Operation: "Mean",
        Mean: Math.round(sum / numsArray.length)
    }
    return result
}

function getMedian(nums) {
    if (nums.length % 2 === 0) { // If Even
        const median1 = nums[(nums.length / 2) - 1]
        const median2 = nums[nums.length / 2]
        let result = {
            Operation: "Median",
            Medians: [median1, median2]
        }
        return result
    } else { // If Odd
        const median = Math.round((nums.length / 2) - 1)
        console.log(nums[median])
        let result = {
            Operation: "Median",
            Median: median
        }
        return result
    }
}

function getMode(nums) {
    let maxFrequency = 0;
    let mode = []
    const numsList = new Map();
    nums.forEach(num => {
        numsList.set(num, (numsList.get(num) || 0) + 1)
    })
    numsList.forEach((frequency, num) => {
        if (frequency > maxFrequency) {
            maxFrequency = frequency
            mode = [num]
        } else if (frequency === maxFrequency) {
            mode.push(num);
        }
    })
    let result = {
        Operation: "Mode",
        Mode: mode.map(num => parseInt(num))
    }
    return result
}

function getAll(nums) {
    const mean = getMean(nums)
    const median = getMedian(nums)
    const mode = getMode(nums)
    return {
        Mean: mean,
        Median: median,
        Mode: mode
    }
}

module.exports = {
    getMean,
    getMedian,
    getMode,
    getAll
}