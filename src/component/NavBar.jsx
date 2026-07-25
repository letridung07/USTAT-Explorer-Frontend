import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import {
    LEAGUES,
    AVAILABLE_SEASONS,
    formatSeason,
} from "../data/leagueCatalog";

export default function NavBar({
    selectedLeague,
    onLeagueChange,
    selectedSeason,
    onSeasonChange,
}) {
    const [pageTitle, setPageTitle] = useState("Overview");

    const dropdownStyles = {
        minWidth: 170, // Width of dropmenu
        borderRadius: 1, // Curve coners
        fontSize: 17, // Text size in the dropmenu
        fontWeight: 600,
    };

    const emojiStyles = {
        fontSize: 24,
        marginRight: 1.5,
    };

    return (
        <Box sx={{}}>
            <Toolbar sx={{ alignItems: "center" }}>
                {/* Slash & Title */}
                <Box
                    sx={{
                        flexGrow: 1, // how much an element grows relative to other flexible items
                        display: "flex", // make slash and title stay on the same horizontal
                        gap: 1.5, // gap between slash and title
                        alignItems: "center", // make slash and title align horizontally
                    }}
                >
                    <Box
                        sx={{
                            width: 6,
                            height: 36,
                            bgcolor: "#2e5ae8",
                            transform: "skew(-10deg)", // make the box tilt so it looks like the slash
                        }}
                    />

                    <Box
                        sx={{
                            width: 6,
                            height: 36,
                            bgcolor: "#2e5ae8",
                            transform: "skew(-10deg)", // make the box tilt so it looks like the slash
                        }}
                    />

                    <Typography
                        component="div"
                        sx={{
                            fontWeight: 800,
                            fontSize: 25,
                            transform: "scaleY(1.2)",
                        }}
                    >
                        {pageTitle}
                    </Typography>
                </Box>

                {/* 2 select buttons */}
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    {/* Dropdown menu for leagues*/}
                    <Select
                        value={selectedLeague}
                        onChange={(event) => onLeagueChange(event.target.value)}
                        size="small"
                        sx={dropdownStyles}
                        // Trophy emoji
                        startAdornment={
                            <EmojiEventsOutlinedIcon sx={emojiStyles} />
                        }
                    >
                        {LEAGUES.map((league) => (
                            <MenuItem
                                key={league.id}
                                value={league.id}
                            >
                                {league.shortName}
                            </MenuItem>
                        ))}
                    </Select>

                    {/* Dropdown menu for seasons*/}
                    <Select
                        value={selectedSeason}
                        onChange={(event) => onSeasonChange(event.target.value)}
                        size="small"
                        sx={dropdownStyles}
                        // Calendar emoji
                        startAdornment={
                            <CalendarMonthOutlinedIcon sx={emojiStyles} />
                        }
                    >
                        {AVAILABLE_SEASONS.map((seasonYear) => (
                            <MenuItem key={seasonYear} value={seasonYear}>
                                {/* display season name */}
                                {formatSeason(seasonYear)}
                            </MenuItem>
                        ))}
                    </Select>
                </Box>
            </Toolbar>
        </Box>
    );
}
