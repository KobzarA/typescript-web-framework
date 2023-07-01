import { UserEdit } from './views/UserEdit';
import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';
import { UserList } from './views/UserList';

// const user = User.buildUser({ name: 'Petr', age: 55 });
// const userEdit = new UserEdit(document.getElementById('root'), user);
// userEdit.render();

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('list');
  if (!root) return;
  users.models.forEach(user => console.log(user));
  const userList = new UserList(root, users);
  userList.render();
});

users.fetch();
