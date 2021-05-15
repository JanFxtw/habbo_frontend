<template>
    <div class="home">
        <div class="background" />
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            password: null,
            email: null,
            signingIn: false,
            appName: process.env.VUE_APP_NAME
        };
    },
    methods: {
        signIn()
        {
            this.signingIn = true;
        }
    }
};
</script>

<style lang="scss">
@import './Home.scss';
</style>
