import getProjects from "./api/getProjects.js";
import displayProjects from "./api/displayProjects.js";



const showProjects = async (index) => {
    const projects = await getProjects();
    displayProjects(projects[index]);
}

window.addEventListener("DOMcontentLoaded", showProjects(0));



const btns = document.querySelectorAll('.btnProject');
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e.currentTarget.parentElement.previousElementSibling.f);
        const id = parseInt(e.currentTarget.parentElement.previousElementSibling.firstChild.nextElementSibling.dataset.id);
        e.currentTarget.classList.contains('btnNext') ? id == 2 ? showProjects(0) : showProjects(id + 1) : "";
        e.currentTarget.classList.contains('btnPrev') ? id == 0 ? showProjects(2) : showProjects(id - 1) : "";

    })
})