import express, { Request, Response } from 'express'; // Updated import
import Appointment from '../models/Appointment';
import Doctor from '../models/Doctor';
import Patient from '../models/Patient';

const router = express.Router();

// Listar todos os agendamentos
router.get('/api/appointments', async (req: Request, res: Response) => {
  try {
    const appointments = await Appointment.findAll({ include: [Doctor, Patient] });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
});

// Adicionar um agendamento
router.post('/api/appointments', async (req: Request, res: Response) => {
  try {
    const { date, doctorId, patientId, status } = req.body;
    if (!date || !doctorId || !patientId) {
      return res.status(400).json({ error: 'Date, doctorId, and patientId are required' });
    }
    const doctor = await Doctor.findByPk(doctorId);
    const patient = await Patient.findByPk(patientId);
    if (!doctor || !patient) {
      return res.status(404).json({ error: 'Doctor or patient not found' });
    }
    const appointment = await Appointment.create({ date, doctorId, patientId, status: status || 'Pendente' });
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create appointment' });
  }
});

// Editar um agendamento
router.put('/api/appointments/:id', async (req: Request, res: Response) => {
  try {
    const { date, doctorId, patientId, status } = req.body;
    if (!date || !doctorId || !patientId) {
      return res.status(400).json({ error: 'Date, doctorId, and patientId are required' });
    }
    const appointment = await Appointment.findByPk(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    const doctor = await Doctor.findByPk(doctorId);
    const patient = await Patient.findByPk(patientId);
    if (!doctor || !patient) {
      return res.status(404).json({ error: 'Doctor or patient not found' });
    }
    await appointment.update({ date, doctorId, patientId, status });
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update appointment' });
  }
});

export default router;