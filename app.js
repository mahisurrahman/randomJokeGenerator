const postContainer = document.getElementById('postContainer');
const postContents = document.getElementById('postContents');
const postButton = document.getElementById('post-button')

const joke = () =>{
    let randomJokes;
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
    .then(res => res.json())
    .then(data =>displayJokes(data));
}


const displayJokes= (data) => {
    postContents.innerText = `${data.joke}`;
}

// joke();