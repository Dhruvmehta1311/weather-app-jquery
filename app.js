$(document).ready(function () {
  $("#get-weather").on("click", function () {
    const city = $("#city-input").val();
    if (city !== "") {
      const apiKey = "d8bc4764813f0e208bbdfa2420653f79";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      $.get(apiUrl, function (data) {
        $("#weather-info").removeClass("hidden");
        $("#city-name").text(data.name);
        $("#weather-description").text(data.weather[0].description);
        $("#temperature").text(`Temperature: ${data.main.temp}°C`);
        $("#humidity").text(`Humidity: ${data.main.humidity}%`);
      }).fail(function () {
        alert("City not found. Please enter a valid city name.");
      });
    } else {
      alert("Please enter a city name.");
    }
  });
});
