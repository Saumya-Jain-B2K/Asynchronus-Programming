//example of chaining

function fetchUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ userId, username:'Saumya_jain'});
        }, 1000);

    });
}
 function fetchPosts(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Post 1', 'Post 2']);
        }, 1000);
    });
 }