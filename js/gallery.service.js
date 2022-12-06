'use strict'

var gProjects = _createProjects()

function _createProjects(){
    const projs = [
        _createProject('minesweeper', 'Minesweeper', 'Minesweeper game', 'Lorem ipsum dolor sit amet consectetur.', '-Minesweeper-game', '2022-12-4', ["Matrixes", "keyboard events"]),
        _createProject('in-picture', 'In-Picture', 'find the right answer for picture', 'Lorem ipsum dolor sit amet consectetur.', 'in-picture', '2022-12-4', []),
        _createProject('touch-nums', 'Touch Nums', 'Touch Nums game', 'Lorem ipsum dolor sit amet consectetur.', '-touch-nums', '2022-12-4', ["Matrixes"]),
        _createProject('books-shop', 'Books Shop', 'Book management website', 'Lorem ipsum dolor sit amet consectetur.', 'Books-Shop', '2022-12-4', ["table", "cards", "crudl"]),
        _createProject('pacman', 'Pacman', 'Pacman game', 'Lorem ipsum dolor sit amet consectetur.', 'pacman', '2022-12-4', ["Matrixes"]),
        _createProject('ball-board', 'Ball-board', 'Ball-board game', 'Lorem ipsum dolor sit amet consectetur.', '-ball-board', '2022-12-4', ["Matrixes"])
    ]

    return projs
}

function _createProject(id, name, title, desc, url, publishedAt, labels){
    return {
        id,
        name,
        title,
        desc,
        url:  `https://idandavid1.github.io/${url}/`,
        publishedAt:  Date.parse(new Date(publishedAt)),
        labels
       }
}

function getProjects(){
    return gProjects
}

function getProjectById(id){
    return gProjects.find(project => project.id === id)
}