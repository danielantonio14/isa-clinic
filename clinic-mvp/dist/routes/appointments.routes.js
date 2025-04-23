"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Updated import
const Appointment_1 = __importDefault(require("../models/Appointment"));
const Doctor_1 = __importDefault(require("../models/Doctor"));
const Patient_1 = __importDefault(require("../models/Patient"));
const router = express_1.default.Router();
// Listar todos os agendamentos
router.get('/api/appointments', async (req, res) => {
    try {
        const appointments = await Appointment_1.default.findAll({ include: [Doctor_1.default, Patient_1.default] });
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch appointments' });
    }
});
// Adicionar um agendamento
router.post('/api/appointments', async (req, res) => {
    try {
        const { date, doctorId, patientId, status } = req.body;
        if (!date || !doctorId || !patientId) {
            return res.status(400).json({ error: 'Date, doctorId, and patientId are required' });
        }
        const doctor = await Doctor_1.default.findByPk(doctorId);
        const patient = await Patient_1.default.findByPk(patientId);
        if (!doctor || !patient) {
            return res.status(404).json({ error: 'Doctor or patient not found' });
        }
        const appointment = await Appointment_1.default.create({ date, doctorId, patientId, status: status || 'Pendente' });
        res.status(201).json(appointment);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create appointment' });
    }
});
// Editar um agendamento
router.put('/api/appointments/:id', async (req, res) => {
    try {
        const { date, doctorId, patientId, status } = req.body;
        if (!date || !doctorId || !patientId) {
            return res.status(400).json({ error: 'Date, doctorId, and patientId are required' });
        }
        const appointment = await Appointment_1.default.findByPk(req.params.id);
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        const doctor = await Doctor_1.default.findByPk(doctorId);
        const patient = await Patient_1.default.findByPk(patientId);
        if (!doctor || !patient) {
            return res.status(404).json({ error: 'Doctor or patient not found' });
        }
        await appointment.update({ date, doctorId, patientId, status });
        res.status(200).json(appointment);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update appointment' });
    }
});
exports.default = router;
