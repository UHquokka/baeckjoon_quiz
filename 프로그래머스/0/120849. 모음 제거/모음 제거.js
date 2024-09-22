function solution(my_string) {
    const vowels = [ 'a', 'e', 'i', 'o', 'u'];
    return [...my_string].filter(v=> !vowels.includes(v)).join('')
}