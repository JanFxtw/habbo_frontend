import VuexORM from '@vuex-orm/core';
import User from './models/User';
import Alert from './models/Alert';

const database = new VuexORM.Database();

database.register(User);
database.register(Alert);

export default VuexORM.install(database);
