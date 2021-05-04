<template>
    <v-footer
        class="v-footer"
        dark
        padless
        absolute
    >
        <v-card
            flat
            tile
            class="white--text"
        >
            <v-card-text class="pa-4 text-center">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
                Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
                accumsan id ultrices nunc. Sed at orci sed massa consectetur
                dignissim a sit amet dui. Duis commodo vitae velit et faucibus.
                Morbi vehicula lacinia malesuada.
                Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin.
                Vestibulum eu ipsum vel diam elementum tempor vel ut orci.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
            </v-card-text>

            <v-divider />

            <v-card-text class="caption pa-4">
                © {{ appName }} | Impressum | Datenschutz
            </v-card-text>
        </v-card>
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
