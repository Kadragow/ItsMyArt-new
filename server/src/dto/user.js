import Role from '../models/Role.js';

export const userDto = async (user) => {
  const role = await Role.findById(user.role);

  const dto = { ...user, role: role.name };

  return dto;
};
