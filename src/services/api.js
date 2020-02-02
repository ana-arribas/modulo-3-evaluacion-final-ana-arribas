const ENDPOINT = 'https://rickandmortyapi.com/api/character/';

const fetchToApi = () => fetch(ENDPOINT).then(response => response.json());

const fetchForCharacter = (id) => fetch(ENDPOINT + id).then(response => response.json());

export { fetchToApi, fetchForCharacter }