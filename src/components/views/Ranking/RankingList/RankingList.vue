<template>
    <v-card
        class="ranking-list"
        elevation="4"
        width="100%"
        light
    >
        <v-card-title>
            <v-layout align-center justify-space-between>
                <h3 class="headline">
                    {{ appName }} - Rankingliste
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
            <v-list flat>
                <v-list-item-group
                    v-model="selectedUser"
                    color="primary"
                >
                    <v-list-item
                        v-for="(user, i) in userList"
                        :key="i"
                    >
                        <v-list-item-icon>
                            <v-icon v-text="user.points" />
                        </v-list-item-icon>
                        <v-avatar>
                            <img
                                :src="avaterSource(user.name)"
                            >
                        </v-avatar>
                        <v-list-item-content>
                            <v-list-item-title v-text="user.name" />
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card-text>
        <v-divider />
        <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
            <v-row
                justify="center"
                align="center"
                class="pa-2"
            >
                <v-pagination
                    v-model="selectedPage"
                    :length="15"
                    :total-visible="7"
                />
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'RankingList',
    data()
    {
        return {
            appName: process.env.VUE_APP_NAME,
            userList: [
                {
                    name: 'SFU-Loc',
                    points: '500'
                },
                {
                    name: 'Bodyguard@Nr.1',
                    points: '400'
                },
                {
                    name: 'Darsen',
                    points: '300'
                },
                {
                    name: 'Enqelchen22',
                    points: '200'
                },
                {
                    name: 'atas9999',
                    points: '100'
                },
                {
                    name: 'Yumarik',
                    points: '100'
                },
                {
                    name: 'Schrott-Lager',
                    points: '100'
                },
                {
                    name: 'Michi17',
                    points: '100'
                },
                {
                    name: 'Yumarik',
                    points: '100'
                },
                {
                    name: 'Gallium',
                    points: '100'
                },
                {
                    name: 'deti',
                    points: '100'
                },
                {
                    name: 'cundero',
                    points: '100'
                },
                {
                    name: 'lliissssii',
                    points: '100'
                }
            ],
            selectedUser: null,
            selectedPage: 1
        };
    },
    methods: {
        avaterSource(name)
        {
            return `https://www.habbo.de/habbo-imaging/avatarimage?hb=image&user=${name}&headonly=1&direction=2&head_direction=2&action=&gesture=&size=m`;
        }
    }
};
</script>
