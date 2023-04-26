function solution(id_pw, db) {
    const userId = id_pw[0];
    const userPw = id_pw[1];

    let result = "fail";

    for (let i = 0; i < db.length; i++) {
        if (db[i][0] !== userId) {
            result = "fail";
        } else {
            if (db[i][1] === userPw) {
                result = "login";
                break;
            } else {
                result = "wrong pw";
                break;
            }
        }
    };
return result;
}