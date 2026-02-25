const express = require("express");
const app = express();

const apiV1Router = require("./routes/index.routes");
const { errorResponse } = require("./utils/response");

app.use(express.json());

app.use("/api/v1", apiV1Router);

app.use((req, res) => {
  return errorResponse(res, 404, "Route not found");
});

app.use((error, req, res, next) => {
  console.error(error);
  return errorResponse(res, 500, "Internal server error");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
