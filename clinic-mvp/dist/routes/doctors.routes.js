"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Updated import
const Doctor_1 = __importDefault(require("../models/Doctor"));
const router = express_1.default.Router();
// Listar todos os médicos
router.get('/api/doctors', async (req, res) => {
    try {
        const doctors = await Doctor_1.default.findAll();
        res.status(200).json(doctors);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch doctors' });
    }
});
// Adicionar um médico
router.post('/api/doctors', async (req, res) => {
    try {
        const { name, specialty } = req.body;
        if (!name || !specialty) {
            return res.status(400).json({ error: 'Name and specialty are required' });
        }
        const doctor = await Doctor_1.default.create({ name, specialty });
        res.status(201).json(doctor);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create doctor' });
    }
});
// Editar um médico
router.put('/api/doctors/:id', async (req, res) => {
    try {
        const { name, specialty } = req.body;
        if (!name || !specialty) {
            return res.status(400).json({ error: 'Name and specialty are required' });
        }
        const doctor = await Doctor_1.default.findByPk(req.params.id);
        if (!doctor) {
            return res.status(404).json({ error: 'Doctor not found' });
        }
        await doctor.update({ name, specialty });
        res.status(200).json(doctor);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update doctor' });
    }
});
exports.default = router;
