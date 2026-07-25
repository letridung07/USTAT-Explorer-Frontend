import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";



export default function OverviewStats() {
    const [statistics, setStatistics] = useState([
        { title: "Completed Matches", value: "380" },
        { title: "Upcoming Matches", value: "0" },
        { title: "Total Goals", value: "1045" },
        { title: "Total xG", value: "1162.40" },
        { title: "Goals / Match", value: "2.75" },
        { title: "xG / Match", value: "3.06" },
        { title: "Home Win %", value: "42.6%" },
        { title: "Away Wins", value: "114" },
        { title: "Home Wins", value: "162" },
        { title: "Draws", value: "104" },
        { title: "Avg Home xG", value: "1.69" },
        { title: "Avg Away xG", value: "1.36" },
    ]);
    
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gap: 2, // Gap spacing between boxes (child components)
                padding: 2, // Spacing between every other components
            }}
        >
            {/* Plug in data */}
            {statistics.map((stat) => (
                // Design boxes
                <Box
                    key={stat.title}
                    sx={{
                        border: "4px solid black",
                        padding: 2,
                        backgroundColor: "white",

                        // Shadow
                        boxShadow: "6px 6px 0 black",
                    }}
                >
                    {/* Design the title */}
                    <Typography
                        sx={{
                            color: "#5c6168",
                            fontWeight: 600,
                            fontSize: "16px",
                            textTransform: "uppercase",
                            marginBottom: 0.7, // Spacing from the number below
                        }}
                    >
                        {stat.title}
                    </Typography>

                    {/* Design the number */}
                    <Typography
                        sx={{
                            color: "#070707",
                            fontWeight: 700,
                            fontSize: "25px",
                            fontFamily: "monospace",
                        }}
                    >
                        {stat.value}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}
