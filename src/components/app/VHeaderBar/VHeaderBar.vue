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
            <v-icon>mdi-cog</v-icon>
        </v-btn>

        <v-btn
            v-if="user"
            icon
            @click="logout"
        >
            <v-icon>mdi-logout</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
import User from '@/store/models/User';

export default {
    name: 'VHeaderBar',
    data()
    {
        return {
            appName: process.env.VUE_APP_NAME
        };
    },
    computed: {
        user()
        {
            return User.find(1);
        }
    },
    methods: {
        logout()
        {
            if (!this.user) { return; }

            User.delete(1);
            this.$router.push({name: 'Home'}).catch(() => {});
        }
    }
};
</script>

<style lang="scss">@import './VHeaderBar.scss';</style>
