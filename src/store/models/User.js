import {Model} from '@vuex-orm/core';

export default class User extends Model
{
    static entity = 'users';

    static primaryKey = 'id';

    static fields()
    {
        return {
            id: this.number(1),
            authenticated: this.boolean(false),
            name: this.string('')
        };
    }
}
