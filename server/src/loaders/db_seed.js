import Role from '../models/Role.js';
import User from '../models/User.js';

export const seedRoles = async () => {
  const data = await Role.find();

  if (data.length > 1) return;

  const userRole = new Role({ name: 'User' });
  const adminRole = new Role({ name: 'Admin' });

  await userRole.save();
  await adminRole.save();
};

export const seedTestUsers = async () => {
  const data = await User.find();

  if (data.length !== 0) return;

  const userRole = await Role.findOne({ name: 'User' });
  const adminRole = await Role.findOne({ name: 'Admin' });

  if (!(userRole && adminRole)) return;

  const testUsers = [
    new User({
      email: 'user1@test.com',
      nickname: 'user1',
      password: 'user1',
      role: userRole._id,
    }),
    new User({
      email: 'user2@test.com',
      nickname: 'user2',
      password: 'user2',
      role: userRole._id,
    }),
  ];

  const testAdmins = [
    new User({
      email: 'admin1@test.com',
      nickname: 'admin1',
      password: 'admin1',
      role: adminRole._id,
    }),
    new User({
      email: 'admin2@test.com',
      nickname: 'admin2',
      password: 'admin2',
      role: adminRole._id,
    }),
  ];

  testUsers.forEach((el) => el.save());
  testAdmins.forEach((el) => el.save());
};
