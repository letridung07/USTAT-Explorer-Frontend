import epl_icon from "../assets/epl_icon.png";
import bundesliga_icon from "../assets/bundesliga_icon.png";
import la_liga_icon from "../assets/la_liga_icon.png";
import ligue_1_icon from "../assets/ligue_1_icon.png";
import serie_a_icon from "../assets/serie_a_icon.png";
import rfpl_icon from "../assets/rfpl_icon.png";

export const LEAGUES = [
    {
        id: "epl",
        shortName: "EPL",
        fullName: "English Premier League",
        logo: epl_icon,
    },
    {
        id: "la-liga",
        shortName: "La Liga",
        fullName: "Spanish La Liga",
        logo: la_liga_icon,
    },
    {
        id: "serie-a",
        shortName: "Serie A",
        fullName: "Italian Serie A",
        logo: serie_a_icon,
    },
    {
        id: "bundesliga",
        shortName: "Bundesliga",
        fullName: "German Bundesliga",
        logo: bundesliga_icon,
    },
    {
        id: "ligue-1",
        shortName: "Ligue 1",
        fullName: "French Ligue 1",
        logo: ligue_1_icon,
    },
    {
        id: "rfpl",
        shortName: "RFPL",
        fullName: "Russian Football Premier League",
        logo: rfpl_icon,
    },
];

export const AVAILABLE_SEASONS = [
    2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014,
];

// format 2024 to be 2024/2025
export function formatSeason(startYear) {
    return `${startYear}/${startYear + 1}`;
}
