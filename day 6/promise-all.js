Promise.all([promise1, promise2])
    .then((result) => {
        //resuts in an array of resolved values
    })

    .catch((error) => {
        //error from the first rejected promise
    });

    