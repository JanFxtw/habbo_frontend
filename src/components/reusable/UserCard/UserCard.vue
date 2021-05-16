<template>
    <v-dialog
        v-model="value"
        width="600px"
        @click:outside="$emit('input', false)"
    >
        <v-card class="user-card">
            <v-card v-if="user">
                <v-card-title class="headline">
                    Profil - {{ userProfile.name }}
                </v-card-title>

                <v-divider />

                <v-card-text>
                    <v-row no-gutters>
                        <v-col cols="6">
                            <img :src="avaterSource()">
                        </v-col>
                        <v-col class="user-data-area text-center" cols="6">
                            <div class="headline">
                                <v-icon class="user-points ma-5" v-text="userProfile.points" />
                            </div>
                            <div class="headline">
                                Chefpilot
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider v-if="user.rank" />

                <user-card-admin
                    v-if="user.rank"
                    :user-id="userId"
                />

                <v-divider />

                <v-card-actions>
                    <v-spacer />
                    <v-btn
                        color="primary"
                        text
                        @click="$emit('input', false)"
                    >
                        Schließen
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-card>
    </v-dialog>
</template>

<script>
import {getUserData} from '@/api/user';
import User from '@/store/models/User';
import UserCardAdmin from './UserCardAdmin';

export default {
    name: 'UserCard',
    components: {
        UserCardAdmin
    },
    props: {
        value: {
            type: Boolean,
            required: true
        },
        userId: {
            type: Number,
            required: true
        }
    },
    data()
    {
        return {
            userData: 'Frank'
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
        },
        avaterSource()
        {
            return `https://www.habbo.de/habbo-imaging/avatarimage?hb=image&user=${this.userProfile.name}&headonly=0&direction=2&head_direction=2&action=&gesture=&size=l`;
        }
    }
};
</script>

<style lang="scss">
@import './UserCard.scss';
</style>

