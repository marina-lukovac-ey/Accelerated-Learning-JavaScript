### REQUIREMENTS

#### SETUP: PLUNKER...

#### Note: Be aware of the order of init file and weather-data...

        let http = new XMLHttpRequest();
        let url = `https://www.google.com`;
        let method = "GET";

        http.open(method, url); //open the
        http.onreadystatechange = function () {
            if (http.readyState == XMLHttpRequest.DONE && http.status == 200) {
            let data = JSON.parse(http.responseText);

            weatherData.temperature = data.main.temp;
            console.log(weatherData);
            console.log(weatherData.temperature);
            console.log(data);
            } else if (http.readyState == XMLHttpRequest.DONE) {
            alert("Something went wrong...");
            } else {
            console.log("well this thrird...");
            }
        };
        http.send();

#####
