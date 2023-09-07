function solution(n, words) {
    for (let i = 0; i < words.length; i++) {
        if (i > 0) {
            if (i > 0 && [...words[i - 1]].pop() != words[i][0] || [...words].splice(0, i - 1).includes(words[i])) {
                return [i % n + 1, Math.ceil((i + 1) / n)]
            }
        }
    }
    return [0, 0]
}