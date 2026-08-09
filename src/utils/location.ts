import { City, Country, State } from "country-state-city";

export type CountryOption = {
    value: string;
    label: string;
};

export type StateOption = {
    value: string;
    label: string;
};

export type CityOption = {
    value: string;
    label: string;
};

export function getCountryOptions(): CountryOption[] {
    return Country.getAllCountries().map((country) => ({
        value: country.isoCode,
        label: country.name,
    }));
}

export function getStateOptions(countryCode: string): StateOption[] {
    if (!countryCode) {
        return [];
    }

    return State.getStatesOfCountry(countryCode).map((state) => ({
        value: state.isoCode,
        label: state.name,
    }));
}

export function getCityOptions(
    countryCode: string,
    stateCode: string,
): CityOption[] {
    if (!countryCode || !stateCode) {
        return [];
    }

    return City.getCitiesOfState(countryCode, stateCode).map((city) => ({
        value: city.name,
        label: city.name,
    }));
}
