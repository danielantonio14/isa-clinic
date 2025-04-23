"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
const Doctor_1 = __importDefault(require("./Doctor"));
const Patient_1 = __importDefault(require("./Patient"));
class Appointment extends sequelize_1.Model {
}
Appointment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Pendente'
    },
    doctorId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    patientId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db_1.default,
    modelName: 'Appointment',
    timestamps: false
});
Appointment.belongsTo(Doctor_1.default);
Appointment.belongsTo(Patient_1.default);
exports.default = Appointment;
