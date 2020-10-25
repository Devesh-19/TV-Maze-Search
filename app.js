const form = document.querySelector("#searchForm");

form.addEventListener ('submit', async e =>
{
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    const image = document.createElement("img");
    image.src = res.data[0].show.image.medium;
    document.body.append(image);
})