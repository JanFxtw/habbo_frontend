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
import {loginState} from '@/api/authentication';
import AlertBar from '@/components/app/AlertBar';
import Alert from '@/store/models/Alert';
import User from '@/store/models/User';
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
    },
    async created()
    {
        const beta = true;

        if (beta) { return; }

        try
        {
            await loginState()
                .then((response) =>
                {
                    const {authenticated} = response;

                    if (!authenticated)
                    {
                        User.deleteAll();
                        this.$router.push({name: 'Home'});
                    }
                })
                .catch(() =>
                {
                    Alert.insert({
                        data: {
                            type: 2,
                            text: 'syncError'
                        }
                    });
                });
        }
        catch (error)
        {
            Alert.insert({
                data: {
                    type: 2,
                    text: 'syncError'
                }
            });
        }
    }
};
</script>
