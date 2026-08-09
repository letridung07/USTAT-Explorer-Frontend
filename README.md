# USTAT Explorer Frontend
A website that allows use to interactively view football stats from leagues including: EPL, Ligue 1, Bundesliga, La Liga and RFPL

**Features:**
- Overview stats
- Matches
- League Table
- Player Stats

## Installation
1. Install [node version manager (nvm)](https://github.com/nvm-sh/nvm)
2. Using nvm, install version 26: `nvm install 26`
3. Check if node version is 26: `nvm current` and `node --version`
4. Install dependencies: `npm install`
5. Run dev: `npm run dev`

## Commands:
- Generate API using Orval: `npm run generate-api`

## Using npm run generate-api
1. Run backend fastapi and go to http://127.0.0.1:8000/openapi.json
2. Paste the content in that link to a new file in /openapi_shema
3. Go to orval.config.ts and change the input target to the new file created in step 2
4. Run the command: `npm run generate-api`

## Copyright:
2026 @ Le Tri Dung
2026 @ Le Minh Hieu