<template>
    <v-app-bar
        absolute
        color="#FFF"
        elevate-on-scroll
    >
        <div
            class="text-link"
            text
            @click="$router.push({name: 'Home'}).catch(() => {})"
        >
            {{ appName }}
        </div>

        <v-spacer />

        <v-btn
            v-if="user"
            icon
            @click="$router.push({name: 'Edit'}).catch(() => {})"
        >
            <v-icon>mdi-clipboard-edit</v-icon>
        </v-btn>

        <v-btn
            icon
            @click="$router.push({name: 'Ranking'}).catch(() => {})"
        >
            <v-icon>mdi-trophy</v-icon>
        </v-btn>

        <v-btn
            icon
            @click="$router.push({name: 'Help'}).catch(() => {})"
        >
            <v-icon>mdi-help</v-icon>
        </v-btn>

        <v-divider
            class="mx-2"
            vertical
            inset
        />

        <v-btn
            v-if="!user"
            icon
            @click="$router.push({name: 'Login'}).catch(() => {})"
        >
            <v-icon>mdi-login</v-icon>
        </v-btn>

        <v-btn
            v-if="user"
            icon
        >
            <v-avatar>
                <img :src="avaterSource(user.name)">
            </v-avatar>
        </v-btn>

        <div
            v-if="user"
            class="caption"
        >
            {{ user.name }}
        </div>

        <v-btn
            v-if="user"
            icon
            @click="showLogoutConfirm = true"
        >
            <v-icon>mdi-logout</v-icon>
        </v-btn>

        <consent-dialog
            v-if="user"
            v-model="showLogoutConfirm"
            @consent="logoutUser"
        >
            <template #headline>
                Abmeldung
            </template>
            <template #content>
                Möchtest du dich von {{ user.name }} abmelden?
            </template>
        </consent-dialog>
    </v-app-bar>
</template>

<script>
import User from '@/store/models/User';
import {logoutUser} from '@/api/authentication';
import ConsentDialog from '@/components/reusable/ConsentDialog';

export default {
    name: 'VHeaderBar',
    components: {
        ConsentDialog
    },
    data()
    {
        return {
            appName: process.env.VUE_APP_NAME,
            showLogoutConfirm: false
        };
    },
    computed: {
        user()
        {
            return User.query().first();
        }
    },
    methods: {
        async logoutUser()
        {
            try
            {
                await logoutUser()
                    .then((response) =>
                    {
                        const {logout} = response;

                        if (logout)
                        {
                            User.delete(this.user.id);
                            this.$router.push({name: 'Ranking'}).catch(() => {});
                        }
                    });
            }
            catch (error)
            {
                /* Alert.insert({
                    data: {
                        type: 2,
                        text: 'loginError'
                    }
                }); */
            }
        },
        avaterSource()
        {
            return `https://www.habbo.de/habbo-imaging/avatarimage?hb=image&user=${this.user.name}&headonly=1&direction=2&head_direction=2&action=&gesture=&size=m`;
        }
    }
};
</script>

<style lang="scss">@import './VHeaderBar.scss';</style>
