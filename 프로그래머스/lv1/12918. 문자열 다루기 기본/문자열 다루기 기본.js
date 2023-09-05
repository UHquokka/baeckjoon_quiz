function solution(s) {
    let result = false;
    if (s.length === 4 || s.length === 6) {
        for (const char of s) {
            if (!!Number(char) || Number(char) === 0) {
                result = true;
            } else {
                result = false;
                break;
            }
        }
    }
    return result;
}