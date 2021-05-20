<template>
    <v-dialog
        v-model="value"
        width="800px"
        @click:outside="$emit('input', false)"
    >
        <v-card>
            <v-card-title class="headline">
                Historie
            </v-card-title>

            <v-divider />

            <v-card-text>
                <div class="pt-2">
                    <v-list flat>
                        <v-list-item-group
                            v-model="selectedItem"
                            color="primary"
                        >
                            <v-list-item
                                v-for="(history, i) in userHistory"
                                :key="i"
                            >
                                <v-list-item-icon>
                                    <v-avatar>
                                        <img :src="avaterSource(history.name)">
                                    </v-avatar>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{ history.name }}
                                    </v-list-item-title>
                                    <v-list-item-subtitle>
                                        Gutschrift: {{ history.point_value }} Punkte -
                                        {{ formatedDate(history.edit_time) }}
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
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
import {getUserHistory} from '@/api/user';

export default {
    name: 'AdminHistory',
    props: {
        value: {
            type: Boolean,
            required: true
        },
        userId: {
            type: Number,
            required: true
        }
    },
    data()
    {
        return {
            selectedItem: null,
            userHistory: []
        };
    },
    watch: {
        userId()
        {
            this.updateHistory();
        }
    },
    created()
    {
        this.updateHistory();
    },
    methods: {
        async updateHistory()
        {
            try
            {
                const userData = {
                    id: this.userId
                };

                await getUserHistory(userData)
                    .then((response) =>
                    {
                        console.log(response);
                        this.userHistory = response;
                    })
                    .catch(error => console.log(error));
            }
            catch (error)
            {
                console.log(error);
            }
        },
        avaterSource(name)
        {
            return `https://www.habbo.de/habbo-imaging/avatarimage?hb=image&user=${name}&headonly=1&direction=2&head_direction=2&action=&gesture=&size=m`;
        },
        formatedDate(input)
        {
            const date = new Date(input);
            return new Intl.DateTimeFormat('de-DE', {
                dateStyle: 'long'
            }).format(date);
        }
    }
};
</script>
