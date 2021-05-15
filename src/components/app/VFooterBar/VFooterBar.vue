<template>
    <v-footer
        class="v-footer caption pa-4"
        dark
        padless
        absolute
    >
        © {{ appName }} | Impressum | Datenschutz
    </v-footer>
</template>

<script>
export default {
    name: 'VFooterBar',
    data()
    {
        return {
            appName: process.env.VUE_APP_NAME
        };
    }
};
</script>
