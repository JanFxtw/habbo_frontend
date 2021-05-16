<template>
    <v-app>
        <v-main>
            <v-header-bar />
            <router-view />
            <v-footer-bar />
            <AlertBar
                v-model="showAlert"
                :alert="currentAlert"
            />
        </v-main>
    </v-app>
</template>

<script>
import AlertBar from '@/components/app/AlertBar';
import Alert from '@/store/models/Alert';
import VHeaderBar from './components/app/VHeaderBar';
import VFooterBar from './components/app/VFooterBar';

export default {
    name: 'App',
    components: {
        VFooterBar,
        VHeaderBar,
        AlertBar
    },
    computed: {
        showAlert: {
            get()
            {
                return !!this.currentAlert;
            },
            set(value)
            {
                if (value) { return; }
                Alert.delete(this.currentAlert.id);
            }
        },
        currentAlert()
        {
            return Alert.query().first();
        }
    }
};
</script>
