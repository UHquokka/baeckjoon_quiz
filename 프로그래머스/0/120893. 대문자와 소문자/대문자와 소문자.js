function solution(my_string) {
    return [...my_string].map(char=> 
        char.toUpperCase() == char ?  char.toLowerCase() : char.toUpperCase()
    ).join('')
}