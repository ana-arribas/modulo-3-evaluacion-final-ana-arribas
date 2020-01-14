const ENDPOINT = 'https://rickandmortyapi.com/api/character/';

const fetchToApi = () => fetch(ENDPOINT).then(response => response.json());

export { fetchToApi }