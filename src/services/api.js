const API_BASE_URL = "http://127.0.0.1:8000";

export async function getSeasonSummary(league, season) {
    const response = await fetch(
        `${API_BASE_URL}/overview/season_summary?league=${league}&season=${season}`,
    );

    if (!response.ok) {
        throw new Error(
            `Failed to get season summary: ${response.status}`,
        );
    }

    return response.json();
}