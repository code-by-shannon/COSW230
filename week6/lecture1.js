async function getPosts() {
    
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json();

    renderUsers(users);
};

getPosts();

function renderUsers(users){
    const userHTML = users.map((user) => {
        return `<li>${user.name}</li>`;
    }).join('');

    const contentEL = document.getElementById('content');
    contentEL.innerHTML = userHTML; 
};

