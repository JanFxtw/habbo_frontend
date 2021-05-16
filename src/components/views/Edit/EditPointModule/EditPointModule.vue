<template>
    <div class="edit-point-module">
        <v-autocomplete
            v-model="selectedUser"
            :items="userList"
            item-value="id"
            item-text="name"
            outlined
            dense
            label="Nutzerauswahl"
            multiple
        >
            <template v-slot:item="data">
                <v-list-item-avatar>
                    <img :src="avaterSource(data.item.name)">
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title v-text="data.item.name" />
                </v-list-item-content>
            </template>
        </v-autocomplete>

        <v-row class="align-center">
            <v-spacer />
            <v-btn
                :disabled="points <= -10"
                x-large
                @click="points--"
            >
                <v-icon>mdi-minus</v-icon>
            </v-btn>
            <span class="display-2 ma-4">
                {{ points }}
            </span>
            <v-btn
                x-large
                :disabled="points >= 10"
                @click="points++"
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-spacer />
        </v-row>

        <v-row>
            <v-col>
                <v-btn
                    color="green"
                    class="float-right white--text"
                    @click="showConfirm = true"
                >
                    Punkte hinzufügen
                </v-btn>
            </v-col>
        </v-row>

        <consent-dialog
            v-model="showConfirm"
            @consent="addPoints"
        />
    </div>
</template>

<script>
import {getUserList} from '@/api/ranking';
import ConsentDialog from '@/components/reusable/ConsentDialog';

export default {
    name: 'EditPointModule',
    components: {
        ConsentDialog
    },
    data()
    {
        return {
            userList: [],
            selectedUser: [],
            points: 0,
            showConfirm: false
        };
    },
    created()
    {
        this.updateUserList();
    },
    methods: {
        avaterSource(name)
        {
            return `https://www.habbo.de/habbo-imaging/avatarimage?hb=image&user=${name}&headonly=1&direction=2&head_direction=2&action=&gesture=&size=m`;
        },
        async updateUserList()
        {
            try
            {
                await getUserList()
                    .then((response) =>
                    {
                        this.userList = response;
                    });
            }
            catch (error)
            {
                console.log(error);
            }
        },
        addPoints()
        {
            console.log('add');
        }
    }
};
</script>
