import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'Petr', age: 55 });
const userEdit = new UserEdit(document.getElementById('root'), user);
userEdit.render();
