// Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F


grades=(score)=>{
    if(score>=80 && score<=100){
    return "A"}
    else if(score>=70 && score<=89){
    return "B"}
    else if(score>=60 && score<=69){
    return "C"}
    else if(score>=50 && score<=59){
    return "D"}
    else if(score>=0 && score<=49){
    return "F"}
    else{
    return "Enter a valid Number"
}
}

console.log(grades(850))
