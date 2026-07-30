// This object mirrors the data shape expected from the overview API.
// UI details such as labels, icons, colours, and number formatting live in the
// page and components rather than in the API response.
export const overviewStatsData = {
    summary: {
        completedMatches: 380,
        upcomingMatches: 0,
        totalGoals: 1045,
        totalXg: 1162.4,
    },
    scoring: {
        goalsPerMatch: {
            value: 2.75,
            benchmarks: {
                lowest: 1.28,
                allTimeAverage: 2.45,
                highest: 4.12,
            },
        },
        xgPerMatch: {
            value: 3.06,
            benchmarks: {
                lowest: 1.45,
                allTimeAverage: 2.71,
                highest: 4.81,
            },
        },
    },
};
