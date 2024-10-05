async function fetchData() {
    try{
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Error fetching data');
            })
        }, 1000);
    };
    catch (error) {
        console.error('Caught an error:', error);
        }
        console.log(data);
}    