const languages = [
    {
        "language": "Казахский",
        "level": "(РОДНОЙ)"
    },
    {
        "language": "Русский",
        "level": "B1"
    },
    {
        "language": "Английский",
        "level": "B1"
    }
]

function renderLanguages() {
    const container = document.getElementById('languagesContainer');
    languages.forEach(
        function(languages) {
            const languageHTML = `
                <li class="mb-2"><span class="resume-lang-name font-weight-bold">${languages.language}</span>
                <small class="text-muted font-weight-normal">${languages.level}</small></li>
            `
        container.innerHTML += languageHTML;}
    );
}

renderLanguages();