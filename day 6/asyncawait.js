async function fetchData() {
    try{
        const data = await Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Error fetching data');
            }, 1000);
        });
        console.log(data);
    } catch (error) {
        console.error('Caught an error:', error);
    }
}

fetchData();