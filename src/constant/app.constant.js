export default {
  PORT: 3000,
  MONGO_URL: "mongodb://<db_username>:GYeOn4dvVDaHFieC@ac-ifgvbd6-shard-00-00.tkvbtpu.mongodb.net:27017,ac-ifgvbd6-shard-00-01.tkvbtpu.mongodb.net:27017,ac-ifgvbd6-shard-00-02.tkvbtpu.mongodb.net:27017/?ssl=true&replicaSet=atlas-l2lavg-shard-0&authSource=admin&appName=Cluster0",
};
// GYeOn4dvVDaHFieC
// maahirathore2007_db_user
export const app_constant = {
  cookie: {
    accessToken: {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 15 * 60 * 1000,
    },
    refreshToken: {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 30 * 60 * 1000,
    },
  },
};
