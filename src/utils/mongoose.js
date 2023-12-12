import { connect, connection, mongoose } from "mongoose";

const conn = {
  isConnected: false,
};

export async function connectDB() {
  if (conn.isConnected) return;

  // const db = await connect("mongodb://127.0.0.1/nextmongocrud");
  const db = await mongoose.connect(process.env.MONGODB_URI);
  // console.log(db.connection.db.databaseName);
  // conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => {
  console.log("Mongoose is connected");
});

connection.on("error", (err) => {
  console.log("Mongoose conection error", err);
});
