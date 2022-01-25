fetch('https://api.github.com/users/Guidantas28')
    .then(response => response.json())
    .then(data => console.log(data))