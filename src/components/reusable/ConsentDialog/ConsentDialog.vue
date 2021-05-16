<template>
    <v-dialog
        v-model="value"
        width="500px"
    >
        <v-card>
            <v-card>
                <v-card-title class="headline">
                    Aktion bestätigen
                </v-card-title>

                <v-divider />

                <v-card-text>
                    <div class="pt-2">
                        Möchtest du diese Aktion durchführen?
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
                    <v-btn
                        color="green"
                        text
                        @click="consentAction"
                    >
                        Bestätigen
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'ConsentDialog',
    props: {
        value: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        consentAction()
        {
            this.$emit('input', true);
            this.$emit('consent', true);
        }
    }
};
</script>

