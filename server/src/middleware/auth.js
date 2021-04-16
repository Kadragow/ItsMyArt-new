import jwt from 'jsonwebtoken';
import { SECRET_TOKEN_NAME } from '../utils/constants.js';

const auth = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) return res.status(403).json({ message: 'Forbidden' });

    const token = authorization.split(' ')[1];

    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, SECRET_TOKEN_NAME);

      req.userId = decodedData.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData.sub;
    }

    next();
  } catch (error) {
    console.error(error);
  }
};

export default auth;
