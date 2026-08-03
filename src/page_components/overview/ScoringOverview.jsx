import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import SportsSoccer from "@mui/icons-material/SportsSoccer";
import QueryStatsOutlined from "@mui/icons-material/QueryStatsOutlined";

import { useOverview } from "../../context/OverviewContext";

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

// function calculateProgressBar(highest, lowest, average) {
//     const percentage = ((average - lowest) / (highest - lowest)) * 100;
//     return `${percentage}%`;
// }

export default function ScoringOverview() {
    const { seasonSummary } = useOverview();

    return (
        <>
            <Box sx={panelHeaderSx}>
                <QueryStatsOutlined sx={panelHeaderIconSx} />
                <Typography sx={panelTitleSx}>Scoring Overview</Typography>
            </Box>

            {/* 2 boxes in scoring overview */}
            <Box sx={scoringContentSx}>
                {/* Goals / Match card */}
                <Box sx={scoringMetricSx}>
                    <SportsSoccer sx={scoringBallIconSx} />

                    <Typography sx={scoringLabelSx}>Goals / Match</Typography>
                    <Typography sx={scoringValueSx}>
                        {seasonSummary.goal_per_match}
                    </Typography>

                    {/* Progress bar */}
                    <Box sx={progressTrackSx}>
                        <Box sx={progressFillSx("70%")} />
                    </Box>

                    {/* Under progress bar */}
                    <Box sx={benchmarkGridSx}>
                        <Box>
                            <Typography sx={benchmarkLabelSx}>
                                Lowest
                            </Typography>
                            <Typography sx={benchmarkValueSx}>1.28</Typography>
                        </Box>
                        <Box>
                            <Typography sx={benchmarkLabelSx}>
                                All-time Avg
                            </Typography>
                            <Typography sx={benchmarkValueSx}>2.45</Typography>
                        </Box>
                        <Box>
                            <Typography sx={benchmarkLabelSx}>
                                League Avg
                            </Typography>
                            <Typography
                                sx={[benchmarkValueSx, benchmarkHighlightSx]}
                            >
                                {seasonSummary.goal_per_match}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={benchmarkLabelSx}>
                                Highest
                            </Typography>
                            <Typography sx={benchmarkValueSx}>4.12</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* xG / Match card */}
                <Box sx={scoringMetricSx}>
                    <Box sx={scoringXgIconSx}>xG</Box>

                    <Typography sx={scoringLabelSx}>xG / Match</Typography>
                    <Typography sx={scoringValueSx}>
                        {seasonSummary.xg_per_match}
                    </Typography>
                    <Box sx={progressTrackSx}>
                        <Box sx={progressFillSx("72%")} />
                    </Box>
                    {/* Under progress bar */}
                    <Box sx={benchmarkGridSx}>
                        <Box>
                            <Typography sx={benchmarkLabelSx}>
                                Lowest
                            </Typography>
                            <Typography sx={benchmarkValueSx}>1.45</Typography>
                        </Box>
                        <Box>
                            <Typography sx={benchmarkLabelSx}>
                                All-time Avg
                            </Typography>
                            <Typography sx={benchmarkValueSx}>2.71</Typography>
                        </Box>
                        <Box>
                            <Typography sx={benchmarkLabelSx}>
                                League Avg
                            </Typography>
                            <Typography
                                sx={[benchmarkValueSx, benchmarkHighlightSx]}
                            >
                                {seasonSummary.xg_per_match}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography sx={benchmarkLabelSx}>
                                Highest
                            </Typography>
                            <Typography sx={benchmarkValueSx}>4.81</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}
