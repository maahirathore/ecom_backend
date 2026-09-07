import createApp from "./src/app.js";
import connectDB from "./src/database/db.js";
import logger from "./src/config/logger.js";
import env from "./src/config/env.js";
import dotenv from "dotenv"
dotenv.config();
(function startServer() {
  connectDB()
    .then(() => {
      createApp().listen(process.env.PORT, () => {
        logger.info({ port:process.env.PORT }, "your app is running");
      });
    })
    .catch((error) => {
      logger.error({ error: error }, "there is an error while connection");
    });
})();
