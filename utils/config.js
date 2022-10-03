import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  sqlConfig: {
    server: process.env.SQL_SERVER,
    database: process.env.SQL_DATABASE,
    driver: "msnodesqlv8",
    options: {
      trustedConnection: true,
    },
  },
};
