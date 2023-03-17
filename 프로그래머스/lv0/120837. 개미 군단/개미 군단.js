function solution(hp) {
    const GEN = 5;
    const SOL = 3;
    const WOR = 1;

    const num = Math.floor(hp / GEN) + Math.floor((hp % GEN) / SOL) + Math.floor((hp % GEN) % SOL);
    return num;
}