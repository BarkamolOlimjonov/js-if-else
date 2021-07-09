let studentScore = 55

if(studentScore >= 95){
    console.log('You got A+');
} else if(studentScore >= 90 && studentScore < 95) {
    console.log('You gor A');
} else if (studentScore < 90 && studentScore >= 85) {
    console.log('You got B+');
} else if(studentScore >= 80 && studentScore < 85) {
    console.log('You got B');
} else if (studentScore < 80 && studentScore >= 75) {
    console.log('You got E+');
} else if(studentScore < 75  && studentScore >= 70) {
    console.log('You got E');
} if(studentScore < 70) {
    console.log('You faild');
} 