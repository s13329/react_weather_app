const key = '600235113d5353d8b9ad35dad6de3d07';

export async function getWeather (loc) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=${key}`);
    const data =  await response.json();
    if(data.cod === '400'){
      return null;
    }
    return data.list.slice(0, 5);
  }
