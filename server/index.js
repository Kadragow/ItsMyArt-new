import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { seedRoles, seedTestUsers } from './src/loaders/db_seed.js';

import indexRoutes from './src/routes/index.js';
import authRoutes from './src/routes/auth.js';
import postRoutes from './src/routes/post.js';
import roleRoutes from './src/routes/role.js';
import userRoutes from './src/routes/user.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use(indexRoutes);
app.use('/auth', authRoutes);
app.use('/post', postRoutes);
app.use('/role', roleRoutes);
app.use('/user', userRoutes);

seedRoles();
seedTestUsers();

const CONNECTION_URL =
  'mongodb+srv://kadragow:Zxasqw12@cluster0.k5sid.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
