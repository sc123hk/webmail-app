## Introduction
A webmail application like Gmail (OAuth not supported).

## Tech Stack
- React
- Node.js
- Webpack

## Environment 
```
node -v
v19.7.0
npm -v
9.6.3
```

## Configuration
| file | field | value |
| --- | --- | --- |
| client/src/code/config.ts | userEmail | email address |
| server/serverInfo.json | user | email address |
| | pass | email password |
| | host && port | Microsoft provided |

## Server-side Setup
```
cd server && npm install
npm run compile // production OR
npm run dev // developement
```

## Client-side Setup
```
cd client && npm install
npm run build
```
