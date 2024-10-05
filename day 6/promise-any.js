const p1 = Promise.reject('Error 1');
const p2 = Promise.resolve('Success');
const p3 = Promise.reject('Error 2');

Promise.any([p1, p2, p3])
    .then((values) => {
        console.log(values);
    })

    .catch((error) => {
        console.error('All promises were rejected');
    });