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

import { formatSeason, LEAGUES } from "./data/leagueCatalog.js";



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



function App() {
    const [selectedLeague, setSelectedLeague] = useState("epl");
    const [selectedSeason, setSelectedSeason] = useState(2025);

    const seasonName = formatSeason(selectedSeason);

    const selectedLeagueDetails = LEAGUES.find((item) => item.id === selectedLeague)

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
                    leagueName={selectedLeagueDetails.fullName}
                    seasonName={seasonName}
                    leagueLogo={selectedLeagueDetails.logo}
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
