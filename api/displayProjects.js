const container = document.querySelector('.gallery')

const displayProjects = (projects) => {
    const { name, id, url, image, infos } = projects;
    return container.innerHTML = `<h2 class="projectTitle">${name}</h2> 
    <a href="${url} "data-id='${id}'>
    <img class="imgProject" src="${image}" alt="image ${name}">
    </a>
    <p class="projectInfos">${infos}</p>`
}

export default displayProjects;