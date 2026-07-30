import { useEffect, useState } from "react";
import { getSeasonSummary } from "../services/api.js";

export default function SeasonSummaryTest({league, season}) {
    const [summary, setSummary] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadSeasonSummary() {
            try {
                const data = await getSeasonSummary(league, season);

                console.log("Season summary: ", data);
                setSummary(data);
            } catch (requestError) {
                console.error(requestError);
                setError(requestError.message);
            }
        }

        loadSeasonSummary();
    }, []);

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!summary) {
        return <p>Loading season summary</p>;
    }

    return (
        <div>
            <h2>Season Summary</h2>

            <p>Total matches: {summary.total_matches}</p>
            <p>Total goals: {summary.total_goals}</p>
            <p>Total xG: {summary.total_xg}</p>

            <h3>Raw API response</h3>

            <pre>{JSON.stringify(summary, null, 2)}</pre>
        </div>
    );
}
