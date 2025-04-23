import express, { Request, Response } from 'express'; // Updated import
import Patient from '../models/Patient';

const router = express.Router();

// Listar todos os pacientes
router.get('/api/patients', async (req: Request, res: Response) => {
  try {
    const patients = await Patient.findAll();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
});

// Adicionar um paciente
router.post('/api/patients', async (req: Request, res: Response) => {
  try {
    const { name, phone } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }
    const patient = await Patient.create({ name, phone });
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create patient' });
  }
});

// Editar um paciente
router.put('/api/patients/:id', async (req: Request, res: Response) => {
  try {
    const { name, phone } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    await patient.update({ name, phone });
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update patient' });
  }
});

export default router;