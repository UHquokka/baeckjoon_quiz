function solution(order) {
    let clap = 0;
    const clapArr = [...String(order)].filter(v => [3, 6, 9].includes(Number(v)) && clap++);
    return clap;
}