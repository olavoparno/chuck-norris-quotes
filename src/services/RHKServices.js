const baseUrl = "https://api.chucknorris.io/jokes";

function baseFetch(url) {
  const options = {
    mode: "cors",
    method: "GET"
  };
  return fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw Error(`Cannot fetch data for ${url}.`);
    })
    .then(data => data)
    .catch(() => ({ error: `Cannot fetch data for ${url}.` }));
}

function fetchCategories() {
  return baseFetch(`${baseUrl}/categories`);
}

function fetchCategoryQuote(currentCategory) {
  return baseFetch(`${baseUrl}/random?category=${currentCategory}`);
}

export { fetchCategories, fetchCategoryQuote };
