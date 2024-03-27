// Default status tags: "FINISHED", "THE_BEST", "IN_PROGRESS", "HOSTED"
const projects = [
    {
        "project_name": "YouDown",
        "github_link": "https://github.com/nyrta1/YouDown",
        "created_at": 2023,
        "project_description": "Я создал этот проект для загрузки медиафайлов с YouTube на базе Angular 16 и Spring Boot. Воспользовался библиотекой с GitHub для скачивания видео. Интегрировал её в систему, сделав проект легким. С FFmpeg обеспечил высокое качество видео. Сервер позволяет загружать файлы высокого разрешения. Удобный интерфейс облегчает загрузку контента с YouTube.",
        "tech_stacks": ["Spring Boot", "Spring Security", "JSON Web Token", "PostgreSQL", "Docker", "FFmpeg", "Hibernate", "TypeScript", "Angular 16"],
        "status": ["FINISHED", "THE_BEST"]
    },
    {
        "project_name": "AlgaSamga",
        "github_link": "https://github.com/nyrta1/AlgaSamga",
        "created_at": 2023,
        "project_description": "Я разработал веб-сайт для онлайн-обучения с удобным видеостримингом, интуитивным интерфейсом и комментариями к урокам для взаимодействия студентов. Также добавил функционал просмотра профилей других участников и создал админ-панель для полного контроля.",
        "tech_stacks": ["Spring Boot", "Spring Security", "Thymeleaf", "PostgreSQL", "Docker", "Hibernate", "HTML/CSS", "Bootstrap"],
        "status": ["FINISHED"]
    }
];

function renderProjects() {
    const container = document.getElementById('projectsContainer');
    projects.forEach(function(project) {
        const projectHTML = `
                    <div class="resume-timeline position-relative">
                        <article class="resume-timeline-item position-relative pb-5 my-project-item">
                            <div class="resume-timeline-item-header mb-2">
                                <div class="d-flex flex-column flex-md-row">
                                    <h3 class="resume-position-title font-weight-bold mb-1">
                                        ${project.project_name}
                                        ${project.status.includes("FINISHED") ? '<i class="fa fa-check" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Project has been completed"></i>' : ''}
                                        ${project.status.includes("THE_BEST") ? '<i class="fa fa-star" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="The best project"></i>' : ''}
                                        ${project.status.includes("IN_PROGRESS") ? '<i class="fa fa-wrench" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="In development"></i>' : ''}
                                        ${project.status.includes("HOSTED") ? '<i class="fa fa-globe" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Hosted on internet"></i>' : ''}
                                    </h3>
                                    <div class="resume-company-name ml-auto">
                                        <a href="${project.github_link}" target="_blank">GitHub Repository <i class="fa fa-link" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                <div class="resume-position-time">${project.created_at}</div>
                            </div>
                            <div class="resume-timeline-item-desc">
                                <p>${project.project_description}</p>
                                <div class="resume-skill-item">
                                    <h4 class="resume-skills-cat font-weight-bold">Используемые технологии</h4>
                                    <ul class="list-inline">
                                        ${project.tech_stacks.map(stack => `<li class="list-inline-item"><span class="badge badge-light">${stack}</span></li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    </div>`;
        container.innerHTML += projectHTML;
    });
}

renderProjects();

/*
{
        "project_name": "Multi Data Format Microservices Library System",
        "github_link": "https://github.com/nyrta1/Multi-Data-Format-Microservices-Library-System",
        "created_at": 2024,
        "project_description": "Я создал микросервисы, каждый из которых обрабатывает различные типы данных, такие как JSON, XML и YAML, используя одну базу данных. Это очень удобно для других библиотек, работающих с разными форматами данных. Если хотя бы один из микросервисов выйдет из строя, остальные будут продолжать функционировать.",
        "tech_stacks": ["Spring Boot", "Spring Cloud", "PostgreSQL", "Docker", "JSON Web Token", "API Gateway", "PostgreSQL", "Zipkin"],
        "status": ["FINISHED"]
    },
    {
        "project_name": "Personal Finance Tracker",
        "github_link": "https://github.com/nyrta1/Personal-Finance-Tracker",
        "created_at": 2024,
        "project_description": "Я разработал этот проект с акцентом на надежность и безопасность. В проекте реализована логика, позволяющая анализировать финансовое положение через микросервисы. В случае сбоя одного из серверов, остальные микросервисы продолжают свою работу. Кроме того, я создал конфигурацию для Grafana и Prometheus, позволяющую отслеживать состояние сервера.",
        "tech_stacks": ["React", "Docker", "Spring Boot", "Spring Security", "Spring Cloud", "JSON Web Token", "API Gateway", "PostgreSQL", "Zipkin", "Grafana", "Prometheus"],
        "status": ["FINISHED"]
    },
 */