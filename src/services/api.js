const ENDPOINT = 'https://rickandmortyapi.com/api/character/';
const URL2 = 'https://rickandmortyapi.com/api/character/';

const fetchToApi = () => fetch(ENDPOINT).then(response => response.json());

const fetch2 = (id) => fetch(URL2 + id).then(response => response.json());

export { fetchToApi, fetch2 }