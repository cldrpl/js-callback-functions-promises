const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

/* function createPost(post) {
    // mimicing timeout
    setTimeout(function() {
        // adding onto array 
        posts.push(post);
        // after 2000 seconds
    }, 2000);
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        // loop through
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
} */

/* createPost({title: 'Post Three', body: 'This is post three'});

getPosts(); */

/* function createPost(post, callback) {
    // mimicing timeout
    setTimeout(function() {
        // adding onto array 
        posts.push(post);
        callback();
        // after 2000 seconds
    }, 2000);
} */

// Update using E6 promises w/out callback
function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
            
        }, 2000);
    });


}

function getPosts() {
    setTimeout(function() {
        let output = '';
        // loop through
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// runs createPost's callback before server ends
// functions within functions w/ callback
// .then handling Promised function
createPost({title: 'Post Three', body: 'This is post three'}, )
.then(getPosts)
.catch(function(err) {
    console.log(err)
})