<template>
    <v-dialog
        v-model="value"
        width="500"
        @click:outside="$emit('input', false)"
    >
        <v-card>
            <v-card-title class="headline">
                {{ appName }} - Impressum
            </v-card-title>

            <v-divider />

            <v-card-text>
                <div class="pt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
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
    </v-dialog>
</template>

<script>

export default {
    name: 'VImprint',
    props: {
        value: {
            type: Boolean,
            required: true
        }
    },
    data()
    {
        return {
            appName: process.env.VUE_APP_NAME,
            dialog: false
        };
    }
};
</script>
