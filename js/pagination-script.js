$(document).ready(function() {
    const articles = document.querySelectorAll('.my-project-item');
    const itemsPerPage = 999;
    const totalPages = Math.ceil(articles.length / itemsPerPage);
    const pagination = document.getElementById('pageNumbers');
    const paginationLinks = pagination.querySelectorAll('.page-link');

    function showPage(pageNumber) {
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        articles.forEach((article, index) => {
            if (index >= startIndex && index < endIndex) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });

        paginationLinks.forEach(link => {
            link.classList.remove('active');
        });

        paginationLinks[pageNumber].classList.add('active');
    }

    showPage(1);

    document.querySelectorAll('.page-link').forEach((link, index) => {
        if (index > 0 && index <= totalPages) {
            link.addEventListener('click', () => {
                const pageNumber = parseInt(link.textContent);
                showPage(pageNumber);
            });
        }
    });
})
