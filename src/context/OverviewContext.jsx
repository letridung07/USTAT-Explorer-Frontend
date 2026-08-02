import { createContext, useContext, useEffect, useState } from "react";

import { getSeasonSummary } from "../services/api";

const OverviewContext = createContext(null);


// function to create and provide shared data
export function OverviewProvider({ children }) {
    const [seasonSummary, setSeasonSummary] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // temp fixed values
    // later, these can come from league and season dropdowns
    const league = "EPL";
    const season = 2025;

    useEffect(() => {
        async function loadSeasonSummary() {
            try {
                setIsLoading(true);
                setError(null);

                const data = await getSeasonSummary(league, season);

                setSeasonSummary(data);
            } catch (error) {
                setError(error.message);
                setSeasonSummary(null);
            } finally {
                setIsLoading(false);
            }
        }

        loadSeasonSummary();
    }, [league, season]);

    const contextValue = {
        seasonSummary,
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
