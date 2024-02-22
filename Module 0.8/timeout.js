function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

const func = async () => {
    console.log("Printing before");
    //sleep(3000).then(() => {          // method1 - using promise
        setTimeout(() =>                // method2 - using setTimeout
        console.log("Printing after"),3000
        );
    //});
}
func();

