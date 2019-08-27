<template>
    <div class="layout">
        <!-- 头部 -->
        <layout-header></layout-header>

        <!-- 内容 -->
        <Content>
            <sidebar slot="left"></sidebar>
            <router-view slot="content"></router-view>
        </Content>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import layoutHeader from './LayoutHeader.vue';
import Content from './Content.vue';
import sidebar from './Sidebar.vue';
@Component({
    components: {
        layoutHeader,
        Content,
        sidebar
    }
})
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
.layout {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #f5f7f9;
}
</style>
