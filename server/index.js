import express from 'express';
// import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';

import indexRoutes from './routes/index.js';
// import postRoutes from './routes/post.js';

const app = express();

app.use('/', indexRoutes);

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const CONNECTION_URL =
  'mongodb+srv://kadragow:Zxasqw12@cluster0.k5sid.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
