import express, { Express } from 'express';
import sequelize from './db';
import doctorRoutes from './routes/doctors.routes';
import patientRoutes from './routes/patients.routes';
import appointmentRoutes from './routes/appointments.routes';
import authRoutes from './routes/auth.routes';
require('dotenv').config();

const app: Express = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use(doctorRoutes);
app.use(patientRoutes);
app.use(appointmentRoutes);
app.use(authRoutes);

// Sincronizar banco
sequelize.sync({ force: true }).then(() => {
  console.log('Database synchronized');
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch(err => console.error('Error syncing database:', err));