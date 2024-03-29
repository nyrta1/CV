// FORMAT DATE [MM-DD-YYYY]
const companies = [
    {
        "company_name": "Aicena",
        "position": "Backend Developer",
        "joined_at": "02.2024",
        "left_at": null,
        "comment": "Как разработчик, я создавал объекты с помощью хорошей ORM-связки и разработал RESTful API для клиента. Также интегрировал искусственный интеллект для чата, чтобы пациенты не ждали врача. Я также добавил функцию видеозвонка для пациентов и врачей, чтобы они могли общаться онлайн, не покидая дома.",
        "tech_stacks": ["GitLab", "Goland", "Gorm", "Gin", "Docker", "Firebase", "PostgreSQL"],
    }
]

function renderExperience() {
    const container = document.getElementById("experiencesContainer")
    companies.forEach(
        function (experience) {
            const joinedDate = experience.joined_at;
            const leftDate = experience.left_at ? experience.left_at : "НАСТОЯЩЕЕ ВРЕМЯ";
            const experienceHTML = `
                <div class="resume-timeline position-relative">
                    <article class="resume-timeline-item-active position-relative pb-5 my-project-item">
                        <div class="resume-timeline-item-header mb-2">
                            <div class="d-flex flex-column flex-md-row">
                                <h3 class="resume-position-title font-weight-bold mb-1">${experience.company_name}</h3>
                            </div>
                                <div class="resume-position-time">${joinedDate} - ${leftDate}</div>
                            </div>
                        <div class="resume-timeline-item-desc">
                            <h4 class="resume-skills-cat font-weight-bold">${experience.position}</h4>
                            <p>${experience.comment}</p>
                            <div class="resume-skill-item">
                                <h4 class="resume-skills-cat font-weight-bold">Используемые технологии</h4>
                                <ul class="list-inline">
                                    ${experience.tech_stacks.map(stack => `<li class="list-inline-item"><span class="badge badge-light">${stack}</span></li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
            `
            container.innerHTML += experienceHTML;
        }
    )
}

renderExperience();