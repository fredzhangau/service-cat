require("dotenv").config();

export default {
  port: process.env.PORT || 3000,
  host: "localhost",
  dbUri: process.env.MONGO_DB_URI,
  saltWorkFactor: 5,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  // Used to sign into JWT string payload.
  privateKey: process.env.JWT_PRIVATE_KEY,
};
