import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
