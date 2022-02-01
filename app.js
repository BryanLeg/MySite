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
        if (e.currentTarget.classList.contains('btnNext')) {
            const idNext = parseInt(e.currentTarget.previousElementSibling.firstChild.nextElementSibling.dataset.id);

            if (idNext === 3) {
                showProjects(0)
            } else {
                showProjects(idNext + 1)
            }
        } else if (e.currentTarget.classList.contains('btnPrev')) {
            const idPrev = parseInt(e.currentTarget.nextElementSibling.firstChild.nextElementSibling.dataset.id);
            if (idPrev == 0) {
                showProjects(3)
            } else {
                showProjects(idPrev - 1)
            }
        }
    })
})