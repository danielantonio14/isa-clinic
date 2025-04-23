import express, { Request, Response } from 'express'; // Updated import
import Doctor from '../models/Doctor';

const router = express.Router();

// Listar todos os médicos
router.get('/api/doctors', async (req: Request, res: Response) => {
  try {
    const doctors = await Doctor.findAll();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch doctors' });
  }
});

// Adicionar um médico
router.post('/api/doctors', async (req: Request, res: Response) => {
  try {
    const { name, specialty } = req.body;
    if (!name || !specialty) {
      return res.status(400).json({ error: 'Name and specialty are required' });
    }
    const doctor = await Doctor.create({ name, specialty });
    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create doctor' });
  }
});

// Editar um médico
router.put('/api/doctors/:id', async (req: Request, res: Response) => {
  try {
    const { name, specialty } = req.body;
    if (!name || !specialty) {
      return res.status(400).json({ error: 'Name and specialty are required' });
    }
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    await doctor.update({ name, specialty });
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update doctor' });
  }
});

export default router;