<template>
    <div class="ranking">
        <div class="background" />
        <user-card
            v-model="userCardOpen"
            :user-id="selectedUserId"
        />
        <v-container fill-height>
            <v-row justify="center" align="center">
                <ranking-list
                    @openUserCard="openCard"
                />
            </v-row>
        </v-container>
    </div>
</template>

<script>
import RankingList from '@/components/views/Ranking/RankingList';
import UserCard from '@/components/reusable/UserCard/UserCard.vue';

export default {
    name: 'Home',
    components: {
        RankingList,
        UserCard
    },
    data()
    {
        return {
            userCardOpen: false,
            selectedUserId: 0
        };
    },
    methods: {
        openCard(userId)
        {
            this.userCardOpen = true;
            this.selectedUserId = parseInt(userId, 10);
        }
    }
};
</script>

<style lang="scss">
@import './Ranking.scss';
</style>
