const name = document.getElementsByClassName('project-title')
const description = document.getElementsByClassName('project-description')

const apiurl = fetch('https://api.github.com/users/Guidantas28/repos')
    .then(response => response.json())
    .then(data => console.log(data))
