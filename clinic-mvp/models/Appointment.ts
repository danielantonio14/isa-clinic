import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../db';
import Doctor from './Doctor';
import Patient from './Patient';

interface AppointmentAttributes {
  id: number;
  date: Date;
  status: string;
  doctorId: number;
  patientId: number;
}

interface AppointmentCreationAttributes extends Optional<AppointmentAttributes, 'id' | 'status'> {}

class Appointment extends Model<AppointmentAttributes, AppointmentCreationAttributes> implements AppointmentAttributes {
  public id!: number;
  public date!: Date;
  public status!: string;
  public doctorId!: number;
  public patientId!: number;
}

Appointment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Pendente',
    },
    doctorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Doctors',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    patientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Patients',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  {
    sequelize,
    modelName: 'Appointment',
    timestamps: false,
  },
);

// Associações
Appointment.belongsTo(Doctor, { foreignKey: 'doctorId', as: 'doctor' });
Appointment.belongsTo(Patient, { foreignKey: 'patientId', as: 'patient' });

export default Appointment;