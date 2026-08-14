import { Box, Card, Typography, Stack, styled } from "@mui/material";

import PieChartIcon from "@mui/icons-material/PieChart";
import { PieChart, pieClasses } from "@mui/x-charts/PieChart";

import { useOverview } from "../../context/OverviewContext";

const panelHeaderSx = {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    minHeight: 56,
    gap: 1,
    paddingX: 2,
};

const panelTitleSx = {
    color: "#101828",
    fontWeight: 700,
    fontSize: "14px",
    textTransform: "uppercase",
};

const settings = {
    width: 200,
    height: 200,
    hideLegend: true,
};

// Styles for 3 counts
const outcomesSx = {
    display: "flex",
    justifyContent: "center",
    gap: 3,
    marginTop: 1,
};

const outcomeItemSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    minWidth: 70,
};

const labelRowSx = {
    display: "flex",
    alignItems: "center",
    gap: 0.7,
};

const labelSx = {
    fontSize: 11,
    color: "text.secondary",
};

const valueSx = {
    fontSize: 20,
    fontWeight: 600,
    marginLeft: 1.7,
};

export default function MatchOutcomes() {
    const { seasonSummary } = useOverview();
    const data = [
        {
            id: 0,
            value: seasonSummary.home_win,
            percentage: seasonSummary.home_win_percentage,
            label: "Home Wins",
            color: "#34A853",
        },
        {
            id: 1,
            value: seasonSummary.draws,
            percentage: seasonSummary.draw_percentage,
            label: "Draws",
            color: "#FBBC05",
        },
        {
            id: 2,
            value: seasonSummary.away_win,
            percentage: seasonSummary.away_win_percentage,
            label: "Away Wins",
            color: "#1976D2",
        },
    ];
    return (
        <Box>
            <Box sx={panelHeaderSx}>
                <PieChartIcon sx={{ color: "#000107", fontSize: "28px" }} />
                <Typography sx={panelTitleSx}>Match Outcomes</Typography>
            </Box>

            <Box>
                <PieChart
                    series={[
                        {
                            // innerRadius: 50,
                            // outerRadius: 100,
                            data,
                            arcLabel: (item) => `${item.percentage}%`,

                            highlightScope: {
                                highlight: "item",
                                fade: "global",
                            },
                        },
                    ]}
                    {...settings}
                />

                <Box sx={outcomesSx}>
                    {data.map((item) => (
                        <Box key={item.id} sx={outcomeItemSx}>
                            <Box sx={labelRowSx}>
                                <Box
                                    sx={{
                                        width: 7,
                                        height: 7,
                                        borderRadius: "50%",
                                        backgroundColor: item.color,
                                    }}
                                />

                                <Typography sx={labelSx}>
                                    {item.label}
                                </Typography>
                            </Box>

                            <Typography sx={valueSx}>{item.value}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
