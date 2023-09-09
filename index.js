function distanceFromHqInBlocks(pickUp) {
    console.log(pickUp);
    if (pickUp > 42){
        return (pickUp - 42);
    }   
    else {
        return (42 - pickUp);
    }
}

function distanceFromHqInFeet(pickUpInFt) {
    let distance = distanceFromHqInBlocks(pickUpInFt);
    console.log(pickUpInFt);
    return distance * 264;
}

function distanceTravelledInFeet(start, destination) {
    console.log(start, destination)
    let travel = destination - start
    let travelFt = start - destination
        if (destination > start) {
            return (travel * 264)
        }
        else {
            return (travelFt * 264)
        }
}

function calculatesFarePrice(start, destination) {
    let feetTravlled = distanceTravelledInFeet(start, destination)
        if (feetTravlled < 400){
            return 0
        }
        else if (feetTravlled > 400 && feetTravlled < 2000) {
            return (feetTravlled - 400)* .02
        }
        else if (feetTravlled > 2000 && feetTravlled < 2500) {
            return 25
        }
        else {
            return 'cannot travel that far'
        }
}