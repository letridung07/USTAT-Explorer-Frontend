import { useEffect, useState } from "react";

import { useOverview } from "../context/OverviewContext.jsx";

export default function SeasonSummaryTest() {
    const { seasonSummary, isLoading, error } = useOverview();

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!seasonSummary) {
        return <p>Loading season summary</p>;
    }

    return (
        <div>
            <h2>Season Summary</h2>

            <p>Total matches: {seasonSummary.total_matches}</p>
            <p>Total goals: {seasonSummary.total_goals}</p>
            <p>Total xG: {seasonSummary.total_xg}</p>

            <h3>Raw API response</h3>

            <pre>{JSON.stringify(seasonSummary, null, 2)}</pre>
        </div>
    );
}
