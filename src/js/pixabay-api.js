const API_KEY = '36975970-2726c7257b1c2078714098d3d';

export function onGetPhotoByText(query) {
  return fetch(`http://pixabay.com/api?key=${API_KEY}&q=${query}`).then(res => {
    console.log('res ', res);
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
