function solution(nums) {
    const isPr = (num) => {
        let m = [];
        for (let i = 1; i < num; i++) {
            num % i === 0 && m.push(i)
        }
        return m.length === 1 ? true : false;
    }

    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                count += isPr(nums[i] + nums[j] + nums[k]) ? 1 : 0;
            }
        }
    }
    return count;
}