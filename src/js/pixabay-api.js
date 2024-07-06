export function onGetPhotoByText(query) {
  const API_KEY = '36975970-2726c7257b1c2078714098d3d';
  const targetUrl = `https://pixabay.com/api/?key=${API_KEY}&q=${query}`;
  return fetch(targetUrl).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
