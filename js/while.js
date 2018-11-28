var i = 1;

while (i < 65536) {
    i = i * 2;
    console.log(i);
}



var allCones = Math.floor(Math.random() * 50) + 50;

do {
     var conesSold= ((Math.random() * 5) + 1).toFixed();
    console.log('Cones sold ' + conesSold);

    if(conesSold > allCones){
        console.log("We can't sell you " + conesSold + " because we only have " + allCones + ".")
    }
    if(allCones > 0){
        allCones = allCones - conesSold;
    }
    if(allCones == 0){
        console.log("Yay! We sold all the cones.");
        break;
    }
} while (allCones >= 0);



