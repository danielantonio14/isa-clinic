import bcrypt from 'bcryptjs';
import User from './models/User';
import sequelize from './db';

async function createUser() {
  try {
    await sequelize.sync();
    const existingUser = await User.findOne({ where: { username: 'admin' } });
    if (existingUser) {
      console.log('User "admin" already exists');
      return;
    }
    await User.create({
      username: 'admin',
      password: await bcrypt.hash('password123', 10),
    });
    console.log('User "admin" created successfully');
    // Verificar se o usuário foi criado
    const users = await User.findAll({ attributes: ['id', 'username'] });
    console.log('Current users:', JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Error creating user:', error);
  }
  process.exit();
}

createUser();