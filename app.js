const form = document.querySelector("#searchForm");

form.addEventListener ('submit', async e =>
{
    e.preventDefault();
    const searchTerm = form.elements.query.value;
})