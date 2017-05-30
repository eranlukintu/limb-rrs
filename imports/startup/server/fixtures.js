import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
import { DOTROWS } from "../../api/collections/drows.js";
import { createRootItem } from "../../functions/dot-functions/dot-item-functions/createRootItem.js";

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

// const dotRowsSize = DOTROWS.find().count();
// if (dotRowsSize === 0) {
//   const rootItem =createRootItem();
//   rootItem.forEach(function(dr) {
//     DOTROWS.insert(dr);
//   });
// }
