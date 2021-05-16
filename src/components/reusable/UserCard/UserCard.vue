<template>
    <v-dialog
        v-model="value"
        width="500px"
        @click:outside="$emit('input', false)"
    >
        <v-card>
            <v-card v-if="user">
                <v-card-title class="headline">
                    Profil - {{ user.name }}
                </v-card-title>

                <v-divider />

                <v-card-text>
                    <div class="pt-2">
                        <slot name="content" />
                    </div>
                </v-card-text>

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

export default {
    name: 'UserCard',
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
            userData: null
        };
    },
    computed: {
        user: {
            set(user)
            {
                this.userData = user;
            },
            get()
            {
                return this.userData;
            }
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
                        this.user = response;
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

