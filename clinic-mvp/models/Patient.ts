import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../db';

interface PatientAttributes {
  id: number;
  name: string;
  phone: string;
}

interface PatientCreationAttributes extends Optional<PatientAttributes, 'id'> {}

class Patient extends Model<PatientAttributes, PatientCreationAttributes> implements PatientAttributes {
  public id!: number;
  public name!: string;
  public phone!: string;
}

Patient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Patient',
    timestamps: false,
  },
);

export default Patient;