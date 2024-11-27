import express from 'express';
import categoryRoutes from './routes/category-routes';
import authorRoutes from './routes/author-routes';
import bookRoutes from './routes/book-routes';
import reviewRoutes from './routes/review-routes';
import userRoutes from './routes/user-routes';
import { connectDatabase } from './config/mongo';
import corsMiddleware from './config/cors';
import morgan from 'morgan';
const app = express();
const PORT = 5000;

app.use(morgan('dev'));
app.use(corsMiddleware);
app.use(express.json());
app.use('/api/v1', categoryRoutes)
app.use('/api/v1/', authorRoutes)
app.use('/api/v1/', bookRoutes)
app.use('/api/v1/', reviewRoutes)
app.use('/api/v1/', userRoutes)

connectDatabase().then(() => console.log('Database Connected'));
app.listen(PORT, () => console.log(`Server is running on http://localhost: ${PORT}`));


