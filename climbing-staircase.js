function climbinStair(num) {

    noOfWays = [1, 2];

    for (let i = 2; i <= num; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
    }

    return noOfWays[num - 1];
}

console.log(climbinStair(4))