const ENDPOINT = 'https://rickandmortyapi.com/api/character/';
// const SINGLEURL = 'https://rickandmortyapi.com/api/character/';

const fetchToApi = () => fetch(ENDPOINT).then(response => response.json());

// const singleFetch = (id) => fetch(SINGLEURL + id).then(response => response.json());

export { fetchToApi }