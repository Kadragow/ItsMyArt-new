import Role from '../models/Role.js';
import User from '../models/User.js';

export const seedRoles = async () => {
  let data;
  try {
    data = await Role.find();
  } catch (error) {
    return;
  }

  if (data.length > 1) return;

  const userRole = new Role({ name: 'User' });
  const adminRole = new Role({ name: 'Admin' });

  await userRole.save();
  await adminRole.save();
};

export const seedTestUsers = async () => {
  let data;
  try {
    data = await User.find();
  } catch (error) {
    return;
  }

  if (data.length !== 0) return;

  let userRole;
  let adminRole;

  try {
    userRole = await Role.findOne({ name: 'User' });
    adminRole = await Role.findOne({ name: 'Admin' });
  } catch (err) {
    return;
  }

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
