<template>
    <div class="ranking">
        <div class="background" />
        <v-container fill-height>
            <v-row justify="center" align="center">
                <ranking-list />
            </v-row>
        </v-container>
    </div>
</template>

<script>
import RankingList from '@/components/views/Ranking/RankingList';

export default {
    name: 'Home',
    components: {
        RankingList
    }
};
</script>

<style lang="scss">
@import './Ranking.scss';
</style>
