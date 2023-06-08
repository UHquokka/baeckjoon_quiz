function solution(arr) {
    const p2 = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
    const pow = p2.findIndex(v => arr.length <= v);
    const zero = new Array(2 ** [pow]).fill(0).map((v, i) => arr[i] ? v = arr[i] : v);
    return zero;
}