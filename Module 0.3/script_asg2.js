let age = 25;

switch(true) {
    case (age <= 12):
        console.log("child!");
        break;
    case (age <= 18 && age >= 13):
        console.log("teen!");
        break;
    case (age > 18):
        console.log("adult!");
        break;
    default:
        console.log("invalid age!")
        break;
}
