<template>
    <v-app>
        <v-main>
            <router-view />
            <v-footer-bar />
        </v-main>
    </v-app>
</template>

<script>
import VFooterBar from './components/app/VFooterBar';

export default {
    name: 'App',
    components: {
        VFooterBar
    }
};
</script>
