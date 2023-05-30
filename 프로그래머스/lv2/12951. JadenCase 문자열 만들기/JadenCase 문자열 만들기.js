function solution(s) {
    return s.split(" ").map(v => {
        if (v === "") {
            v = ""
        } else {
            return v[0].toUpperCase() + v.slice(1).toLowerCase()
        }
    }).join(" ");
}