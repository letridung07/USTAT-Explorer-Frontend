import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import EventAvailableOutlined from "@mui/icons-material/EventAvailableOutlined";
import CalendarMonthOutlined from "@mui/icons-material/CalendarMonthOutlined";
import SportsSoccer from "@mui/icons-material/SportsSoccer";
import QueryStatsOutlined from "@mui/icons-material/QueryStatsOutlined";

// @@@@@@@@@@@ ALL SX GOES BELOW HERE @@@@@@@@@@@@@@@@@@
// Summary Stats
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

// Detailed Stats
const detailGridSx = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 2,
    paddingBottom: 2,
    paddingX: 2,
};

const detailPanelSx = {
    display: "flex",
    flexDirection: "column",

    minHeight: 360,
    backgroundColor: "white",
    border: "1px solid #e2e7ef",
    borderRadius: 3,
    overflow: "hidden",

    boxShadow: "0 3px 10px rgba(15, 23, 42, 0.08)",
};

const panelHeaderSx = {
    display: "flex",
    alignItems: "center",
    minHeight: 56,
    gap: 1,
    paddingX: 2,
};

const panelHeaderIconSx = {
    color: "#2563eb",
    fontSize: "28px",
};

const panelTitleSx = {
    color: "#101828",
    fontWeight: 700,
    fontSize: "14px",
    textTransform: "uppercase",
};

const scoringContentSx = {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gap: 1.5,
    paddingX: 1.5,
    paddingBottom: 1.5,
    flexGrow: 1,
};

const scoringMetricSx = {
    border: "1px solid #e2e7ef",
    borderRadius: 2,
    padding: 1.5,
    backgroundColor: "#ffffff",
    position: "relative",
};

const scoringBallIconSx = {
    position: "absolute",
    top: 14,
    right: 14,
    fontSize: "44px",
    color: "#98a2b3",
    opacity: 0.25,
};

const scoringXgIconSx = {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: 14,
    right: 14,
    width: 44,
    height: 44,
    color: "#98a2b3",
    border: "2px solid currentColor",
    borderRadius: "50%",
    boxSizing: "border-box",
    opacity: 0.25,
    fontSize: "20px",
    fontWeight: 700,
};

const scoringLabelSx = {
    color: "#344054",
    fontSize: "14px",
    fontWeight: 500,
    marginBottom: 0.5,
};

const scoringValueSx = {
    color: "#101828",
    fontSize: "26px",
    fontWeight: 700,
    lineHeight: 1.1,
};

const progressTrackSx = {
    width: "100%",
    height: "10px",
    backgroundColor: "#e5e7eb",
    borderRadius: 999,
    overflow: "hidden",
    marginTop: 1.25,
};

// Dynamic progress bar sx
function progressFillSx(width) {
    return {
        width,
        height: "100%",
        backgroundColor: "#2563eb",
        borderRadius: 999,
    };
}

const benchmarkGridSx = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    marginTop: 0.75,
    gap: 0.5,
};

const benchmarkLabelSx = {
    color: "#667085",
    fontSize: "10px",
    textAlign: "center",
    lineHeight: 1.1,
};

const benchmarkValueSx = {
    color: "#344054",
    fontSize: "12px",
    fontWeight: 500,
    textAlign: "center",
    marginTop: 0.25,
};

const benchmarkHighlightSx = {
    color: "#2563eb",
    fontWeight: 700,
    fontSize: "13px",
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
        <Box>
            <Box sx={summaryGridSx}>
                {/* Plug in data */}
                {summaryStatistics.map((stat) => (
                    // Design boxes
                    <Box key={stat.title} sx={summaryCardSx}>
                        {/* Create circular icon */}
                        <Box sx={iconCircleSx(stat.color)}>{stat.icon}</Box>

                        <Box>
                            {/* Design the title */}
                            <Typography sx={statTitleSx}>
                                {stat.title}
                            </Typography>

                            {/* Design the number */}
                            <Typography sx={statValueSx}>
                                {stat.value}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>

            <Box sx={detailGridSx}>
                <Box sx={detailPanelSx}>
                    <Box sx={panelHeaderSx}>
                        <QueryStatsOutlined sx={panelHeaderIconSx} />
                        <Typography sx={panelTitleSx}>
                            Scoring Overview
                        </Typography>
                    </Box>

                    {/* 2 boxes in scoring overview */}
                    <Box sx={scoringContentSx}>
                        {/* Goals / Match card */}
                        <Box sx={scoringMetricSx}>
                            <SportsSoccer sx={scoringBallIconSx}/>

                            <Typography sx={scoringLabelSx}>
                                Goals / Match
                            </Typography>
                            <Typography sx={scoringValueSx}>2.75</Typography>
                            <Box sx={progressTrackSx}>
                                <Box sx={progressFillSx("70%")} />
                            </Box>
                            {/* Under progress bar */}
                            <Box sx={benchmarkGridSx}>
                                <Box>
                                    <Typography sx={benchmarkLabelSx}>
                                        Lowest
                                    </Typography>
                                    <Typography sx={benchmarkValueSx}>
                                        1.28
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={benchmarkLabelSx}>
                                        All-time Avg
                                    </Typography>
                                    <Typography sx={benchmarkValueSx}>
                                        2.45
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={benchmarkLabelSx}>
                                        League Avg
                                    </Typography>
                                    <Typography sx={[benchmarkValueSx, benchmarkHighlightSx]}>
                                        2.75
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={benchmarkLabelSx}>
                                        Highest
                                    </Typography>
                                    <Typography sx={benchmarkValueSx}>
                                        4.12
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        {/* xG / Match card */}
                        <Box sx={scoringMetricSx}>
                            <Box sx={scoringXgIconSx}>xG</Box>

                            <Typography sx={scoringLabelSx}>
                                xG / Match
                            </Typography>
                            <Typography sx={scoringValueSx}>3.06</Typography>
                            <Box sx={progressTrackSx}>
                                <Box sx={progressFillSx("72%")} />
                            </Box>
                            {/* Under progress bar */}
                            <Box sx={benchmarkGridSx}>
                                <Box>
                                    <Typography sx={benchmarkLabelSx}>
                                        Lowest
                                    </Typography>
                                    <Typography sx={benchmarkValueSx}>
                                        1.45
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={benchmarkLabelSx}>
                                        All-time Avg
                                    </Typography>
                                    <Typography sx={benchmarkValueSx}>
                                        2.71
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={benchmarkLabelSx}>
                                        League Avg
                                    </Typography>
                                    <Typography sx={[benchmarkValueSx, benchmarkHighlightSx]}>
                                        3.06
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={benchmarkLabelSx}>
                                        Highest
                                    </Typography>
                                    <Typography sx={benchmarkValueSx}>
                                        4.81
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={detailPanelSx}></Box>
                <Box sx={detailPanelSx}></Box>
            </Box>
        </Box>
    );
}
