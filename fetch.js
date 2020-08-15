class Fetch {
  async getCurrent(input) {
    const myKey = "204261113c7409a6230db55533d2e514";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
