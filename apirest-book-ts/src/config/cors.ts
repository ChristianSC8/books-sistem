import cors from 'cors';

const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST'],       
  allowedHeaders: ['Content-Type'], 
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
