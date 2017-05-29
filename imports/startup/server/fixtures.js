import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

const users = [
  {
    email: 'eranpietsch@gmail.com',
    password: 'eran244244',
    profile: {
      name: { first: 'Eran', last: 'Pietsch' },
    },
    roles: ['admin'],
  },
];

users.forEach(({ email, password, profile, roles }) => {
  const userExists = Meteor.users.findOne({ 'emails.address': email });

  if (!userExists) {
    const userId = Accounts.createUser({ email, password, profile });
    Roles.addUsersToRoles(userId, roles);
  }
});
