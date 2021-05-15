<template>
    <div>
        <v-footer
            class="v-footer caption pa-4"
            dark
            padless
            absolute
        >
            © {{ appName }} |
            <span class="mx-1" @click="imprint = true"> Impressum </span> |
            <span class="mx-1" @click="privacy = true"> Datenschutz </span>
        </v-footer>

        <imprint v-model="imprint" />
        <privacy v-model="privacy" />
    </div>
</template>

<script>
import Privacy from '../VPrivacy';
import Imprint from '../VImprint';

export default {
    name: 'VFooterBar',
    components: {
        Imprint,
        Privacy
    },
    data()
    {
        return {
            appName: process.env.VUE_APP_NAME,
            imprint: false,
            privacy: false
        };
    }
};
</script>
