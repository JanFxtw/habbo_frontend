import {Model} from '@vuex-orm/core';

let increment = 0;

export default class Alert extends Model
{
    static entity = 'alerts';

    static primaryKey = 'id';

    static fields()
    {
        return {
            id: this.uid(() => `${new Date().getTime()}_${increment++}`),
            type: this.number(0),
            text: this.string('')
        };
    }
}
