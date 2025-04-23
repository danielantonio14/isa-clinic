import bcrypt from 'bcryptjs';
import User from './models/User';
import sequelize from './db';

async function createUser() {
  await sequelize.sync();
  await User.create({
    username: 'admin',
    password: await bcrypt.hash('password123', 10),
  });
  console.log('User created');
  process.exit();
}

createUser();