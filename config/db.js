const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    // Set strictQuery to false to prevent deprecation warning
    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDatabase;
