import { City, Country, State } from "country-state-city";

export type CountryOption = {
    code: string;
    name: string;
};

export type StateOption = {
    code: string;
    name: string;
};

export type CityOption = {
    name: string;
};

export function getCountryOptions(): CountryOption[] {
    return Country.getAllCountries().map((country) => ({
        code: country.isoCode,
        name: country.name,
    }));
}

export function getStateOptions(countryCode: string): StateOption[] {
    if (!countryCode) {
        return [];
    }

    return State.getStatesOfCountry(countryCode).map((state) => ({
        code: state.isoCode,
        name: state.name,
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
        name: city.name,
    }));
}
