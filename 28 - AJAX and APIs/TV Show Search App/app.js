const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;

  // the params object is passed to axios
  const config = { params: { q: searchTerm, country: 'US'} }
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config)

  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = (shows)  => {
  for (let result of shows) {
    if(result.show.image) {
      const img = document.createElement('img');
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
}