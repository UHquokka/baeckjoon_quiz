function solution(new_id) {
    let id = new_id.toLowerCase().replace(/[^\w-_.]+/g, "").replace(/[.]{2,}/g, ".");
    if (id[0] == ".") {
        id = id.slice(1);
    }
    if (id[id.length - 1] == ".") {
        id = id.slice(0, -1)
    }
    if (id === "") {
        id = "a"
    }
    if (id.length > 15) {
        id = id.slice(0, 15);
        if (id[id.length - 1] == ".") {
            id = id.slice(0, -1)
        }
    }
    if (id.length < 3) {
        id = Array(3).fill(id[id.length - 1]).map((v, i) => id[i] ? v = id[i] : v).join("");

    }
    return id;
}