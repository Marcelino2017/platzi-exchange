<template>
    <div class="flex justify-center">
        <!-- {{  this.$route.name }} -->
        <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100"/> 
        <px-assets-table v-if="!isLoading" :assets="assets"/>
    </div>
</template>

<script>
import PxAssetsTable from '@/components/PxAssetsTable.vue'
import api from '@/api'
import BounceLoader from "vue-spinner/src/BounceLoader.vue";

export default {
    name: "Home",
    components: {
        PxAssetsTable,
        BounceLoader
    },
    data () {
        return {
            isLoading: false,
            assets:[]
        }
    },
    created () {
        this.isLoading = true
        api.getAssets()
            .then(assets => {
                this.assets = assets
            })
            .finally(() => this.isLoading = false)
    }
}
</script>