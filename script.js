let projectIndex = 0;
const projects = document.querySelectorAll('.project');

// Hide all projects initially
projects.forEach(project => project.style.display = 'none');

// Display the first project
if (projects.length > 0) {
    projects[projectIndex].style.display = 'block';
}

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

if (prevButton) {
    prevButton.addEventListener('click', () => {
        projects[projectIndex].style.display = 'none';
        projectIndex = (projectIndex - 1 + projects.length) % projects.length;
        projects[projectIndex].style.display = 'block';
    });
}

if (nextButton) {
    nextButton.addEventListener('click', () => {
        projects[projectIndex].style.display = 'none';
        projectIndex = (projectIndex + 1) % projects.length;
        projects[projectIndex].style.display = 'block';
    });
}