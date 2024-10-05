//callback example

function fetchData(callback) {
    setTimeout(() => {
      const data = { id : 1, name: 'Jhon Doe'};
      callback(data);
    }, 1000);
  
  }

  fetchData((data) => {
    console.log('Data received:', data);
  });

//example of promises constructor

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = {id: 1, name1: 'Saumya Jain'};
    resolve(data);

  }, 1000);
});

//error propagation

const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = { id: 1, name2: 'Buddy'};
        resolve(data);
    }, 1000);
})

fetchData
    .then((data) => {
        throw new Error('something went wrong');
    })

    .catch((error) => {
        console.error('Caught error:', error.message);
    });