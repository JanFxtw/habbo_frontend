<template>
    <div class="help">
        <div class="background" />

        <v-container fill-height>
            <v-card
                class="help-card"
                elevation="4"
                width="100%"
                light
            >
                <v-card-title>
                    <v-layout align-center justify-space-between>
                        <h3 class="headline">
                            {{ appName }} - Fragen & Antworten
                        </h3>
                        <v-flex>
                            <v-img
                                :alt="appName"
                                class="ml-3"
                                contain height="48px"
                                position="center right"
                                src="@/assets/page_icon.png"
                            />
                        </v-flex>
                    </v-layout>
                </v-card-title>
                <v-divider />
                <v-card-text>
                    Fragen & Antworten
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Help',
    data()
    {
        return {
            appName: process.env.VUE_APP_NAME
        };
    }
};
</script>

<style lang="scss">
@import './Help.scss';
</style>
