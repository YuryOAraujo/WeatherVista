$(document).ready(function () {
    const apiKey = '5117ed3a9bb7bf842323d76d135a830d';

    function getApiUrl(city, units = 'metric', lang = 'pt') {
        return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`;
    }

    function fetchWeatherData(city) {
        const units = $('#celsiusBtn').hasClass('active') ? 'metric' : 'standard';
        const lang = 'pt_br';

        const temperatureElement = $('#temperature');
        const minTemperatureElement = $('#minTemperature');
        const maxTemperatureElement = $('#maxTemperature');
        const weatherIconElement = $('#weatherIcon');
        const conditionElement = $('#condition');
        const sunTime = $('#suntime');
        const windElement = $('#wind');

        $.ajax({
            url: getApiUrl(city, units, lang),
            method: 'GET',
            success: function (data) {
                const temperatureCelsius = data.main.temp;
                temperatureElement.text(temperatureCelsius.toFixed(1) + (units === 'metric' ? '°C' : 'K'));
                minTemperatureElement.text('Min: ' + data.main.temp_min.toFixed(1) + (units === 'metric' ? '°C' : 'K'));
                maxTemperatureElement.text('Max: ' + data.main.temp_max.toFixed(1) + (units === 'metric' ? '°C' : 'K'));

                updateBackgroundColor(temperatureCelsius, units);

                conditionElement.text(data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1));
                weatherIconElement.attr('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);

                const sunriseTime = new Date(data.sys.sunrise * 1000);
                const sunriseHours = sunriseTime.getHours().toString().padStart(2, '0');
                const sunriseMinutes = sunriseTime.getMinutes().toString().padStart(2, '0');
                const formattedSunriseTime = sunriseHours + ':' + sunriseMinutes + 'h';

                const sunsetTime = new Date(data.sys.sunset * 1000);
                const sunsetHours = sunsetTime.getHours().toString().padStart(2, '0');
                const sunsetMinutes = sunsetTime.getMinutes().toString().padStart(2, '0');
                const formattedSunsetTime = sunsetHours + ':' + sunsetMinutes + 'h';
                sunTime.text(formattedSunriseTime + ' - ' + formattedSunsetTime);

                windElement.text('Vento: ' + data.wind.speed + ' m/s');
            },
            error: function () {
                alert('Cidade não encontrada, ou ocorreu um erro ao obter os dados.');
            }
        });
    }

    function updateBackgroundColor(temperature, units) {
        if(units !== 'metric')
            temperature -= 273.15;
        const temperatureColorMap = [
            { minTemp: -50, color: 'rgba(18, 81, 174, 0.8)', accentColor: 'rgba(0, 56, 141, 0.8)'},
            { minTemp: -40, color: 'rgba(39, 98, 186, 0.8)', accentColor: 'rgba(0, 66, 165, 0.8)'},
            { minTemp: -30, color: 'rgba(58, 114, 199, 0.8)', accentColor: 'rgba(13, 78, 175, 0.8)'},
            { minTemp: -20, color: 'rgba(78, 132, 216, 0.8)', accentColor: 'rgba(28, 91, 187, 0.8)'},
            { minTemp: -10, color: 'rgba(96, 149, 230, 0.8)', accentColor: 'rgba(42, 103, 197, 0.8)'},
            { minTemp: 0, color: 'rgba(121, 171, 249, 0.8)', accentColor: 'rgba(62, 119, 210, 0.8)'},
            { minTemp: 10, color: 'rgba(252, 231, 135b, 0.8)', accentColor: 'rgba(248, 219, 89, 0.8)'},
            { minTemp: 20, color: 'rgba(237, 212, 99, 0.8)', accentColor: 'rgba(242, 210, 69, 0.8)'},
            { minTemp: 30, color: 'rgba(239, 125, 75, 0.8)', accentColor: 'rgba(209, 79, 21, 0.8)'},
            { minTemp: 40, color: 'rgba(248, 118, 61, 0.8)', accentColor: 'rgba(221, 72, 6, 0.8)'},
        ];

        let bgColor = 'rgba(18, 81, 174, 0.8)';
        let accentColor = 'rgba(0, 56, 141, 0.8)';

        for (const mapping of temperatureColorMap) {
            if (temperature >= mapping.minTemp) {
                bgColor = mapping.color;
                accentColor = mapping.accentColor;
            } else {
                break;
            }
        }

        $('body').css('background-color', bgColor);
        $('.bg-weather').css('background-color', accentColor);
    }

    $('#celsiusBtn').click(function () {
        $('#kelvinBtn').removeClass('active');
        $(this).addClass('active');
        $(this).prop('disabled', true);
        $('#kelvinBtn').prop('disabled', false);
        fetchWeatherData($('#cityInput').val());
    });

    $('#kelvinBtn').click(function () {
        $('#celsiusBtn').removeClass('active');
        $(this).addClass('active');
        $(this).prop('disabled', true);
        $('#celsiusBtn').prop('disabled', false);
        fetchWeatherData($('#cityInput').val());
    });

    $('#searchBtn, #cityInput').on('click keyup', function (e) {
        if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13)) {
            const city = $('#cityInput').val();
            if (city) {
                fetchWeatherData(city);
            }
        }
    });

    const defaultCity = 'Barbacena';
    $('#cityInput').val(defaultCity);
    fetchWeatherData(defaultCity);
});
