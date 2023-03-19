import React, {useState} from "react";
import {getCitiesList} from "../api/CityService";
import {AsyncPaginate} from "react-select-async-paginate";


function Form(props) {

    const cityInputHandler = (selectedCity) => {
        setInputCity(selectedCity);
        props.onDataRecived(selectedCity);
    }

    const [inputCity, setInputCity] = useState(null);

    const cityOptions = async (value) => {
        const cities = await getCitiesList(value);

        return {
            options: cities.data.map((city) => {
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                };
            }),
        };
    };

    return (
        <AsyncPaginate
            placeholder="Enter city..."
            debounceTimeout={800}
            value={inputCity}
            onChange={cityInputHandler}
            loadOptions={cityOptions}
            theme={(theme) => ({
                ...theme,
                borderRadius: 4,
                borderColor: '#729343',
                colors: {
                    ...theme.colors,
                    primary25: '#096a2e7a',
                    primary50: '#096a2e7a',
                    primary75: '#096a2e7a',
                    primary: '#729343',
                },
            })}
        />
        )

}

export default Form;