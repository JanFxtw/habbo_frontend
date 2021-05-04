<template>
    <div class="login">
        <div class="background" />
        <v-container fill-height>
            <v-row justify="center" align="center">
                <v-card
                    elevation="4"
                    width="500px"
                    light
                    tag="section"
                >
                    <v-card-title>
                        <v-layout align-center justify-space-between>
                            <h3 class="headline">
                                {{ appName }}
                            </h3>
                            <v-flex>
                                <v-img
                                    :alt="appName"
                                    class="ml-3"
                                    contain height="48px"
                                    position="center right"
                                    src="../assets/page_icon.png"
                                />
                            </v-flex>
                        </v-layout>
                    </v-card-title>
                    <v-divider />
                    <v-card-text>
                        <p>Melde dich mit deinen Nutzerdaten an:</p>
                        <v-form>
                            <v-text-field
                                v-model="email"
                                outline
                                label="E-Mail"
                                type="email"
                            />
                            <v-text-field
                                v-model="password"
                                outline
                                hide-details
                                label="Passwort"
                                type="password"
                            />
                        </v-form>
                    </v-card-text>
                    <v-divider />
                    <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                        <v-btn color="info" text>
                            Passwort vergessen?
                        </v-btn>
                        <v-spacer />
                        <v-btn
                            color="info" :large="$vuetify.breakpoint.smAndUp"
                            :loading="signingIn"
                            @click="signIn"
                        >
                            <v-icon left>
                                mdi-lock
                            </v-icon>
                            Anmelden
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
        </v-container>
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
@import './Login.scss';
</style>
