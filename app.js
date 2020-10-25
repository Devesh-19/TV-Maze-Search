const form = document.querySelector("#searchForm");
const images = [];

form.addEventListener ('submit', async e =>
{
    e.preventDefault();
    for (let i = images.length - 1; i >= 0; i--)
    {
        images[i].src = ' ';
        images.pop();
    }
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    displayImages(res.data);
    form.elements.query.value = '';
})

const displayImages = shows =>
{
    for (let result of shows)
    {        
        if (result.show.image)
        {
            const link = document.createElement("a");
            link.href = result.show.url;
            link.target = "_blank"
            const image = document.createElement("img");
            image.src = result.show.image.medium;
            link.appendChild(image);
            document.body.append(link);
            images.push(image);
        }
    }
}