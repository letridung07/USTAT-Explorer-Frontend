import { createContext, useContext, useEffect, useState } from "react";

import { getSeasonSummaryOld } from "../services/api";

import { getSeasonSummary, getScoringOverview } from "../api/generated/overview.ts"

const OverviewContext = createContext(null);


// function to create and provide shared data
export function OverviewProvider({ children, league, season }) {
    const [seasonSummary, setSeasonSummary] = useState(null);
    const [scoringOverview, setScoringOverview] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadSeasonSummary() {
            try {
                setIsLoading(true);
                setError(null);

                const seasonSummaryData = await getSeasonSummary(league, season);
                const scoringOverviewData = await getScoringOverview(league, season);

                setSeasonSummary(seasonSummaryData);
                setScoringOverview(scoringOverviewData);
            } catch (error) {
                setError(error.message);
                setSeasonSummary(null);
                setScoringOverview(null);
            } finally {
                setIsLoading(false);
            }
        }

        loadSeasonSummary();
    }, [league, season]);

    const contextValue = {
        seasonSummary,
        scoringOverview,
        isLoading,
        error,
    };

    return (
        <OverviewContext.Provider value={contextValue}>
            {children}
        </OverviewContext.Provider>
    );
}

// function to read the shared data
export function useOverview() {
    const context = useContext(OverviewContext);

    if (context == null) {
        throw new Error("useOverview must be used inside OverviewProvider");
    }

    return context;
}
