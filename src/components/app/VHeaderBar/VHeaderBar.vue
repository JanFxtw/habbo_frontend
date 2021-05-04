<template>
    <v-app-bar
        absolute
        color="#FFF"
        elevate-on-scroll
    >
        <div
            class="text-link"
            text
            @click="$router.push({name: 'Home'}).catch(()=>{})"
        >
            {{ appName }}
        </div>
        <v-spacer />

        <v-btn
            icon
            @click="$router.push({name: 'Login'}).catch(()=>{})"
        >
            <v-icon>mdi-login</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-help</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-cog</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: 'VHeaderBar',
    data()
    {
        return {
            appName: process.env.VUE_APP_NAME
        };
    }
};
</script>

<style lang="scss">@import './VHeaderBar.scss';</style>
