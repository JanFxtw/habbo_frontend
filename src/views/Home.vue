<template>
    <div class="home">
        <div class="background" />

        <splash-screen v-if="user" />
        <dashboard v-else />
    </div>
</template>

<script>
import SplashScreen from '@/components/views/Home/SplashScreen';
import Dashboard from '@/components/views/Home/Dashboard';
import User from '@/store/models/User';

export default {
    name: 'Home',
    components: {
        SplashScreen,
        Dashboard
    },
    computed: {
        user()
        {
            return User.find(1);
        }
    }
};
</script>

<style lang="scss">
@import './Home.scss';
</style>
