<template>
    <v-bottom-sheet
        v-model="value"
        class="alert-bar"
        @click:outside="$emit('input', false)"
    >
        <v-toolbar
            class="text-h5"
            :color="color"
            dark
        >
            <v-btn
                icon
                class="mr-2"
                @click="$emit('input', false)"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
            {{ alertText.headline }}
        </v-toolbar>
        <v-card
            class="text-center pa-8"
        >
            {{ alertText.text }}
        </v-card>
    </v-bottom-sheet>
</template>

<script>
import alerts from '@/static/alerts.json';

export default {
    name: 'AlertBar',
    props: {
        value: {
            type: Boolean,
            required: true
        },
        alert: {
            type: Object,
            default: null
        }
    },
    data()
    {
        return {
            colors: [
                'primary',
                'success',
                'error'
            ]
        };
    },
    computed: {
        alertText()
        {
            if (this.alert)
            {
                return alerts[this.alert.text];
            }

            return {
                headline: '',
                text: ''
            };
        },
        color()
        {
            return this.alert ? this.colors[this.alert.type] : 'primary';
        }
    }
};
</script>
