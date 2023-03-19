const API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
const API_OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3e7c2267c2msh22156682f7a79a2p10f8b8jsnbcc5ff2d6a46',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    },
};

export const getCitiesList = async (input) => {
    let url = `${API_URL}/cities?minPopulation=10000&namePrefix=${input}`;
    return await fetch(url, API_OPTIONS)
        .then(response => response.json())
        .catch((err) => console.error(err));
}