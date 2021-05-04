<template>
    <v-app>
        <v-main>
            <v-header-bar />
            <router-view />
            <v-footer-bar />
        </v-main>
    </v-app>
</template>

<script>
import VHeaderBar from './components/app/VHeaderBar';
import VFooterBar from './components/app/VFooterBar';

export default {
    name: 'App',
    components: {
        VFooterBar,
        VHeaderBar
    }
};
</script>
