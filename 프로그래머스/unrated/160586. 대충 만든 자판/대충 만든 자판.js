function solution(keymap, targets) {
    const count = {};
    for (const key of keymap) {
        [...key].forEach((char, i) => {
            if (!count[char]) {
                count[char] = i + 1;
            } else {
                if (count[char] > i) {
                    count[char] = i + 1;
                }
            }
        })
    }
    const result = targets.map(target => {
        let sum = 0;
        for (let i = 0; i < target.length; i++) {
            if (!count[target[i]]) {
                sum = -1;
                break;
            } else {
                sum += count[target[i]];
            }
        }
        return sum;
    })
    return result;
}