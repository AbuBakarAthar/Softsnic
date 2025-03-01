import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config/.env" });

const MongoConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      tls: true,
      tlsAllowInvalidCertificates: true // Bypass invalid certificates (if necessary)
  });
    console.log("MongoDB is connected Successfully");
  } catch (error) {
    console.log("MongoDB is connected error", error);
  }
};

export default MongoConnect;
