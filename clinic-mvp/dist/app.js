"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const doctors_routes_1 = __importDefault(require("./routes/doctors.routes"));
const patients_routes_1 = __importDefault(require("./routes/patients.routes"));
const appointments_routes_1 = __importDefault(require("./routes/appointments.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
require('dotenv').config();
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Rotas
app.use(doctors_routes_1.default);
app.use(patients_routes_1.default);
app.use(appointments_routes_1.default);
app.use(auth_routes_1.default);
// Sincronizar banco
db_1.default.sync({ force: true }).then(() => {
    console.log('Database synchronized');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch(err => console.error('Error syncing database:', err));
