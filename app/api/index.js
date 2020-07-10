export const fetchAlbums = () => {
  return fetch('https://jsonplaceholder.typicode.com/albums').then(response =>
    response.json()
  );
};
