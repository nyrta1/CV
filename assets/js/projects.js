// Default status tags: "FINISHED", "THE_BEST", "IN_PROGRESS", "HOSTED"
const projects = [
    {
        "project_name": "Multi Data Format Microservices Library System",
        "github_link": "https://github.com/nyrta1/Multi-Data-Format-Microservices-Library-System",
        "created_at": 2024,
        "project_description": "Этот проект, созданный с использованием микросервисов, предназначен для использования одной базы данных, из которой несколько микросервисов извлекают и предоставляют данные в различных форматах, таких как JSON, XML и YAML. Это очень удобно для других библиотек, использующих различные типы данных.",
        "tech_stacks": ["Spring Boot", "Spring Cloud", "PostgreSQL"],
        "status": ["FINISHED"]
    },
    {
        "project_name": "Personal Finance Tracker",
        "github_link": "https://github.com/nyrta1/Personal-Finance-Tracker",
        "created_at": 2024,
        "project_description": "Проект \"Personal Finance Tracker\" - мощное приложение полного стека с высокой надежностью и безопасностью. Позволяет анализировать финансовое положение через микросервисы. При сбое сервера другие микросервисы продолжают работать. Администраторы управляют статусом через Grafana и Prometheus.",
        "tech_stacks": ["React", "Docker", "Kubernetes", "Spring Boot", "Spring Security", "Spring Cloud", "JSON Web Token", "API Gateway", "PostgreSQL", "Zipkin", "Grafana", "Prometheus"],
        "status": ["FINISHED"]
    },
    {
        "project_name": "YouDown",
        "github_link": "https://github.com/nyrta1/YouDown",
        "created_at": 2023,
        "project_description": "Программа для загрузки медиафайлов с YouTube - мощный инструмент, созданный на базе Angular 16 с помощью Spring Boot. Он предлагает загрузку медиафайлов высокого качества и позволяет обрезать файлы по необходимости. С удобным пользовательским интерфейсом легко пользоваться и эффективно загружать контент с YouTube. ",
        "tech_stacks": ["Spring Boot", "Spring Security", "JSON Web Token", "PostgreSQL", "Docker", "FFmpeg", "Hibernate", "TypeScript", "Angular 16"],
        "status": ["FINISHED", "THE_BEST"]
    },
    {
        "project_name": "AlgaSamga",
        "github_link": "https://github.com/nyrta1/AlgaSamga",
        "created_at": 2023,
        "project_description": "Этот веб-сайт предназначен для онлайн-обучения, где учащиеся могут легко изучать материал с видеостримингом. Простой интерфейс помогает понять процесс обучения. Каждый урок снабжен комментариями, чтобы вы могли общаться и задавать вопросы друг другу. Кроме того, каждый студент может просматривать профили других студентов, узнавать, какие курсы они проходят, и т.д. Администраторы имеют доступ к контролю всех пользователей через админ-панель.",
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