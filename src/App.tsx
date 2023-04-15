import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const cityRexExp = RegExp(/г [А-Я а-я]*/);
    const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
    const token = "db1aaa57a20d27b703d4e290710a5798e4c08c81";
    const [query, setQuery] = useState({lat: 0, lon: 0, count: 1});
    const [locationName, setLocationName] = useState("");
    const [locationError, setLocationError] = useState(0);

    const options: RequestInit = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify(query)
    };

    const errorHandler = (error: GeolocationPositionError) => {
        setLocationError(error.code)
        console.log(error.message)
    };

    const successHandler = (position: GeolocationPosition) => {
        setQuery({lat: position.coords.latitude, lon: position.coords.longitude, count: 1})
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successHandler, errorHandler, {maximumAge: Infinity});
        }
    }, []);

    useEffect(() => {
        fetch(url, options)
            .then(response => response.json())
            .then(result => setLocationName(cityRexExp.exec(result.suggestions[0]?.value)![0]))
            .catch(error => console.log("error", error));
    }, [query]);


    return (
        <div className="App">
            <div>
                {locationName != ""
                    ? <>
                        <div className="locationName">{locationName}</div>
                        <div className="locationCoords">
                            <div>{query.lat}</div>
                            <div>{query.lon}</div>
                        </div>
                    </>
                    : locationError > 0
                        ? <div className="info-error">проверьте разрешен ли доступ к геолокации и к сети Интернет и
                            перезагрузите страницу</div>
                        : <div className="info-loading">определение местоположения...</div>
                }
            </div>
        </div>
    )
}

export default App
