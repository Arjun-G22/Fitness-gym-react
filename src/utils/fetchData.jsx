export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    params: { limit: '1324' },
    headers: {
        'X-RapidAPI-Key': '2c768e8d75msh0c5421da40a8e4bp1ba73ejsn5060ee188b3e',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};