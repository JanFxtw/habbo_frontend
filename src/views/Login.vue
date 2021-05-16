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
                                    src="@/assets/page_icon.png"
                                />
                            </v-flex>
                        </v-layout>
                    </v-card-title>
                    <v-divider />
                    <v-card-text class="login-card">
                        <p>
                            {{ forgotPassword ?
                                'Gebe deine E-Mail zum Zurücksetzen deines Passwortes ein:' :
                                'Melde dich mit deinen Nutzerdaten an:'
                            }}
                        </p>
                        <v-form
                            ref="form"
                            v-model="formValid"
                        >
                            <v-text-field
                                v-model="email"
                                outline
                                :rules="emailRules"
                                label="E-Mail"
                                type="email"
                                prepend-icon="mdi-email"
                            />
                            <v-text-field
                                v-if="!forgotPassword"
                                v-model="password"
                                outline
                                :rules="passwordRules"
                                label="Passwort"
                                :type="showPassword ? 'text' : 'password'"
                                prepend-icon="mdi-form-textbox-password"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="showPassword = !showPassword"
                            />
                        </v-form>
                    </v-card-text>
                    <v-divider />
                    <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                        <v-btn
                            color="info" text
                            @click="forgotPassword = !forgotPassword;"
                        >
                            {{ forgotPassword ? 'zur Anmeldung' : 'Passwort vergessen?' }}
                        </v-btn>
                        <v-spacer />
                        <v-btn
                            color="info"
                            :large="$vuetify.breakpoint.smAndUp"
                            :loading="signingIn"
                            class="px-4"
                            @click="signIn"
                        >
                            Anmelden
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import {loginUser, loginState} from '@/api/authentication';

export default {
    name: 'Login',
    data()
    {
        return {
            password: null,
            showPassword: false,
            email: null,
            signingIn: false,
            forgotPassword: false,
            appName: process.env.VUE_APP_NAME,
            formValid: true,
            emailRules: [
                v => !!v || 'Gebe zur Anmeldung eine gültige E-Mail an.',
                v => /.+@.+\..+/.test(v) || 'Bitte gebe eine gültige E-Mail zur Anmeldung an.'
            ],
            passwordRules: [
                v => !!v || 'Du benötigst zur Anmeldung ein gültiges Passwort.'
            ]
        };
    },
    methods: {
        async signIn()
        {
            this.signingIn = true;

            const userData = {
                email: this.email,
                password: this.password
            };

            try
            {
                await loginUser(userData)
                    .then((response) =>
                    {
                        console.log(response);
                        const {authenticated} = response;

                        if (authenticated)
                        {
                            /* User.update({
                                where: 1,
                                data: {
                                    authenticated: true
                                }
                            }); */

                            // this.$router.push({name: 'Home'});
                            console.log('login successful');
                        }

                        this.signingIn = false;
                        this.password = '';
                    })
                    .then(() =>
                    {
                        loginState()
                            .then(response => console.log(response));
                    });
            }
            catch (error)
            {
                this.signingIn = false;
                this.password = '';

                /* Alert.insert({
                    data: {
                        type: 2,
                        text: 'loginError'
                    }
                }); */
            }
        }
    }
};
</script>

<style lang="scss">
@import './Login.scss';
</style>
