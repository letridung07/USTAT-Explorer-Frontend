import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import EventAvailableOutlined from "@mui/icons-material/EventAvailableOutlined";
import CalendarMonthOutlined from "@mui/icons-material/CalendarMonthOutlined";
import SportsSoccer from "@mui/icons-material/SportsSoccer";

// @@@@@@@@@@@ ALL SX GOES BELOW HERE @@@@@@@@@@@@@@@@@@
const summaryGridSx = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: 2, // Gap spacing between boxes (child components)
    padding: 2, // Spacing between every other components
};

const summaryCardSx = {
    display: "flex",
    alignItems: "center",
    minHeight: 110,
    gap: 2,
    padding: 2.5,
    borderRadius: 3,
    border: "1px solid #e2e7ef",
    backgroundColor: "white",

    // Shadow
    boxShadow: "0 3px 10px rgba(15, 23, 42, 0.08)",
};

const iconCircleSx = (color) => ({
    width: 64,
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,

    color: "white",
    fontWeight: 700,
    fontSize: "21px", // For xG text
    "& svg": {
        fontSize: "32px",
    },

    borderRadius: "50%",
    backgroundColor: color,
});

const statTitleSx = {
    color: "#344054",
    fontWeight: 500,
    fontSize: "14px",
    marginBottom: 0.4, // Spacing from the number below
};

const statValueSx = {
    color: "#101828",
    fontWeight: 700,
    fontSize: "30px",
    lineHeight: 1.1,
};
// @@@@@@@@@@@ ALL SX GOES ABOVE HERE @@@@@@@@@@@@@@@@@@

export default function OverviewStats() {
    const summaryStatistics = [
        {
            title: "Completed Matches",
            value: "380",
            icon: <EventAvailableOutlined />,
            color: "#5b38c8",
        },
        {
            title: "Upcoming Matches",
            value: "0",
            icon: <CalendarMonthOutlined />,
            color: "#1768d7",
        },
        {
            title: "Total Goals",
            value: "1045",
            icon: <SportsSoccer />,
            color: "#20ad50",
        },
        { title: "Total xG", value: "1162.40", icon: "xG", color: "#ff9914" },
    ];

    return (
        <Box sx={summaryGridSx}>
            {/* Plug in data */}
            {summaryStatistics.map((stat) => (
                // Design boxes
                <Box key={stat.title} sx={summaryCardSx}>
                    {/* Create circular icon */}
                    <Box sx={iconCircleSx(stat.color)}>{stat.icon}</Box>

                    <Box>
                        {/* Design the title */}
                        <Typography sx={statTitleSx}>{stat.title}</Typography>

                        {/* Design the number */}
                        <Typography sx={statValueSx}>{stat.value}</Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}
