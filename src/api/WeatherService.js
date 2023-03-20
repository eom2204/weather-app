const API_URL = `https://api.openweathermap.org/data/2.5`;
const API_KEY = `9dc4c7e716ba83130e89017b4cf29a1a`;


export const getCurrentWeather = (location) => {
    let url = `${API_URL}/weather?q=${location.city},${location.countryCode},&appid=${API_KEY}&units=metric`;
    return fetch(url)
      .then(response => response.json())
      .then(result => {
          return result;
      }).catch((err) => console.error(err));
}

export const getForecast = (location) => {
    let url = `${API_URL}/forecast?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`;
  return fetch(url).then(response => response.json())
        .then(result => {
            return Object.entries(groupItemsByDay(result.list));
        }).catch((err) => console.error(err));

}

const groupItemsByDay = (array) => {
    return array.reduce((groups, item) => {
        let datetime = item['dt_txt'].split(' ');
        let date = datetime[0];
        let group = groups[date] || (groups[date] = []);
        group.push(item);
        return groups;
    }, []);
}

