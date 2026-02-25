# Blogify API

Module 2 architectural blueprint for the Blogify backend API.

## Architecture

- Express app entrypoint in `src/index.js`
- Versioned API namespace: `/api/v1`
- Master router: `src/routes/index.routes.js`
- Resource router: `src/routes/posts.routes.js`
- Controllers contain route handlers only
- Middleware handles request validation
- Services contain business/data logic
- Responses are standardized through `src/utils/response.js`

## Routes

Base URL: `http://localhost:3000/api/v1`

- `GET /posts`
- `GET /posts/:postId`
- `POST /posts`
- `PUT /posts/:postId`
- `DELETE /posts/:postId`

## Response Format

Success:

```json
{
	"success": true,
	"message": "...",
	"data": {}
}
```

Error:

```json
{
	"success": false,
	"message": "...",
	"errors": []
}
```

## Run

```bash
npm install
npm run dev
```
