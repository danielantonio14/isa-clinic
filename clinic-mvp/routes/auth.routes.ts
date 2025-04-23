import express, { Request, Response, NextFunction } from 'express'; // Updated import
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
require('dotenv').config();

const router = express.Router();

interface LoginRequestBody {
  username: string;
  password: string;
}

router.post('/api/login', async (req: Request<{}, {}, LoginRequestBody>, res: Response) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
    const user = await User.findOne({ where: { username } });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to login' });
  }
});

// Middleware de autenticação
const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).user = decoded; // Casting temporário para evitar erro de tipagem
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Proteger rotas
router.use('/api/doctors', authMiddleware);
router.use('/api/patients', authMiddleware);
router.use('/api/appointments', authMiddleware);

export default router;