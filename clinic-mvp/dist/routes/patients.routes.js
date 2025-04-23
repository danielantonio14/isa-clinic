"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Updated import
const Patient_1 = __importDefault(require("../models/Patient"));
const router = express_1.default.Router();
// Listar todos os pacientes
router.get('/api/patients', async (req, res) => {
    try {
        const patients = await Patient_1.default.findAll();
        res.status(200).json(patients);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch patients' });
    }
});
// Adicionar um paciente
router.post('/api/patients', async (req, res) => {
    try {
        const { name, phone } = req.body;
        if (!name || !phone) {
            return res.status(400).json({ error: 'Name and phone are required' });
        }
        const patient = await Patient_1.default.create({ name, phone });
        res.status(201).json(patient);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create patient' });
    }
});
// Editar um paciente
router.put('/api/patients/:id', async (req, res) => {
    try {
        const { name, phone } = req.body;
        if (!name || !phone) {
            return res.status(400).json({ error: 'Name and phone are required' });
        }
        const patient = await Patient_1.default.findByPk(req.params.id);
        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }
        await patient.update({ name, phone });
        res.status(200).json(patient);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update patient' });
    }
});
exports.default = router;
