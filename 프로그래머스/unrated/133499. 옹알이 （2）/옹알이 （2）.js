function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    const isSeries = (b, word) => {
        let s = b.replaceAll(word, "?");
        for (let i = 1; i < s.length; i++) {
            if (s[i] === "?") {
                if (s[i - 1] === "?") return true;
            }
        } return false;
    }

    words.map(w => {
        babbling = babbling.map(b => {
            if (w.length > 1) {
                if (!isSeries(b, w)) {
                    return b.split(w).join(" ");
                }
            }
            return b;
        })
    })

    return babbling.filter(v => v.trim() == "").length
}