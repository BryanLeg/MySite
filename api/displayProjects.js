const container = document.querySelector('.images')

const displayProjects = (projects) => {
    const { name, id, url, image } = projects;
    return container.innerHTML = `<a href="${url} "data-id='${id}'>
    <img class="imgProject" src="${image}" alt="image ${name}">
    </a>
    <h2 class="projectTitle">${name}</h2> `
}

export default displayProjects;