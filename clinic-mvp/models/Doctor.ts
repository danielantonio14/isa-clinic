import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../db';

interface DoctorAttributes {
  id: number;
  name: string;
  specialty: string;
}

interface DoctorCreationAttributes extends Optional<DoctorAttributes, 'id'> {}

class Doctor extends Model<DoctorAttributes, DoctorCreationAttributes> implements DoctorAttributes {
  public id!: number;
  public name!: string;
  public specialty!: string;
}

Doctor.init(
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
    specialty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Doctor',
    timestamps: false,
  },
);

export default Doctor;