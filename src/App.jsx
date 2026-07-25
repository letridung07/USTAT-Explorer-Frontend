import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import { Box, CssBaseline } from "@mui/material";

import NavBar from "./component/NavBar.jsx";
import SideBar from "./component/SideBar.jsx";
import LeagueBanner from "./component/LeagueBanner.jsx";

import OverviewStats from "./pages/OverviewPage.jsx";
import MatchesPage from "./pages/MatchesPage.jsx";
import LeagueTablePage from "./pages/LeagueTablePage.jsx";
import PlayersPage from "./pages/PlayersPage.jsx";
import CompareTeamsPage from "./pages/CompareTeamsPage.jsx";
import ComparePlayersPage from "./pages/ComparePlayersPage.jsx";

import epl_icon from "./assets/epl_icon.png";
import bundesliga_icon from "./assets/bundesliga_icon.png";
import la_liga_icon from "./assets/la_liga_icon.png";
import ligue_1_icon from "./assets/ligue_1_icon.png";
import serie_a_icon from "./assets/serie_a_icon.png";
import rfpl_icon from "./assets/rfpl_icon.png";



// @@@@@@@@@@@ ALL SX GOES HERE @@@@@@@@@@@@@@@@@@
const appContainerSx = {
    display: "flex", // line up
    minHeight: "100vh", // Make the page fill the whole screen
    // gradient background for the whole page
    backgroundImage: `
        linear-gradient(
            to bottom,
            rgba(7, 21, 43, 1) 0%,
            rgba(7, 21, 43, 0.95) 65%,
            rgba(11, 34, 70, 1) 100%
        )
    `,
};

const mainContentSx = {
    bgcolor: "#f4f5f8", // slightly dark white

    // Round corner
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 2,
    flexGrow: 1, // To make the main content not floating when stretching
};

// @@@@@@@@@@@ ALL SX IS ABOVE @@@@@@@@@@@@@@@@@@

const leagueNames = {
    "EPL": "English Premier League",
    "La Liga": "Spanish La Liga",
    "Serie A": "Italian Serie A",
    "Bundesliga": "German Bundesliga",
    "Ligue 1": "French Ligue 1",
    "RFPL": "Russian Football Premier League",
};

const leaguesLogos = {
    "EPL": epl_icon,
    "La Liga": la_liga_icon,
    "Serie A": serie_a_icon,
    "Bundesliga": bundesliga_icon,
    "Ligue 1": ligue_1_icon,
    "RFPL": rfpl_icon,
}

function App() {
    const [selectedLeague, setSelectedLeague] = useState("EPL");
    const [selectedSeason, setSelectedSeason] = useState(2025);

    const seasonName = `${selectedSeason}/${selectedSeason + 1}`;

    return (
        <Box sx={appContainerSx}>
            {/* removes the browser’s default body margin (white space) */}
            <CssBaseline />

            <SideBar />

            <Box component="main" sx={mainContentSx}>
                <NavBar
                    selectedLeague={selectedLeague}
                    onLeagueChange={setSelectedLeague}
                    selectedSeason={selectedSeason}
                    onSeasonChange={setSelectedSeason}
                />

                <LeagueBanner
                    leagueName={leagueNames[selectedLeague]}
                    seasonName={seasonName}
                    leagueLogo={leaguesLogos[selectedLeague]}
                />

                <Routes>
                    {/* Only showing Overview page for now */}
                    <Route path="/" element={<OverviewStats />} />
                    <Route path="/matches" element={<MatchesPage />} />
                    <Route path="/league-table" element={<LeagueTablePage />} />
                    <Route path="/players" element={<PlayersPage />} />
                    <Route path="/compare-teams" element={<CompareTeamsPage />} />
                    <Route
                        path="/compare-players"
                        element={<ComparePlayersPage />}
                    />
                </Routes>
            </Box>
        </Box>
    );
}

export default App;
