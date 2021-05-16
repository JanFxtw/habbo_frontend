<template>
    <div v-if="user.rank">
        <v-card-title class="headline">
            Administration
        </v-card-title>
        <v-card-text>
            <v-btn
                color="primary"
                class="mt-2"
                @click="showHistory = true"
            >
                Historie
            </v-btn>
            <v-btn
                color="orange"
                dark
                class="ml-2 mt-2"
                @click="showEdit = true"
            >
                Bearbeiten
            </v-btn>
            <v-btn
                color="red"
                dark
                class="ml-2 mt-2"
                @click="showPenalty = true"
            >
                Strafe
            </v-btn>
        </v-card-text>

        <admin-history v-model="showHistory" />
        <admin-edit v-model="showEdit" />
        <admin-penalty v-model="showPenalty" />
    </div>
</template>

<script>
import {getUserData} from '@/api/user';
import User from '@/store/models/User';
import AdminHistory from './AdminHistory.vue';
import AdminEdit from './AdminEdit.vue';
import AdminPenalty from './AdminPenalty.vue';

export default {
    name: 'UserCardAdmin',
    components: {
        AdminHistory,
        AdminEdit,
        AdminPenalty
    },
    props: {
        userId: {
            type: Number,
            required: true
        }
    },
    data()
    {
        return {
            userData: 'Frank',
            showHistory: false,
            showEdit: false,
            showPenalty: false
        };
    },
    computed: {
        userProfile: {
            set(user)
            {
                this.userData = user;
            },
            get()
            {
                return this.userData;
            }
        },
        user()
        {
            return User.query().first();
        }
    },
    watch: {
        userId()
        {
            this.getUserData();
        }
    },
    methods: {
        async getUserData()
        {
            const userData = {
                id: this.userId
            };

            try
            {
                await getUserData(userData)
                    .then((response) =>
                    {
                        this.userProfile = response;
                    });
            }
            catch (error)
            {
                console.log(error);
            }
        }
    }
};
</script>

<style lang="scss">
@import './UserCardAdmin.scss';
</style>

