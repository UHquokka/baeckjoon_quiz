function solution(nums) {
    const n = nums.length / 2;
    const set = new Set([...nums])
    const kind = [...set];
    return n <= kind.length ? n : kind.length;
}
