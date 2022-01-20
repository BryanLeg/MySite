const url = './api/projects.json';

const getProjects = async () => {
    try {
        const response = await fetch(url);
        const projects = await response.json();

        return projects;
    } catch (error) {
        console.log(error);
    }
}

export default getProjects;