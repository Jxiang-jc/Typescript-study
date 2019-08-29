<template>
    <div class="charts-data">
        <el-tabs type="border-card" v-model="tabPosition">
            <el-tab-pane label="折线图" name="line">
                <charts :chartData="chartData" chartType="line"></charts>
            </el-tab-pane>
            <el-tab-pane label="柱状图" name="bar">
                <charts :chartData="chartData" chartType="bar"></charts>
            </el-tab-pane>
            <el-tab-pane label="饼图" name="pie">
                <charts :chartData="chartData" chartType="pie"></charts>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import Charts from '@/components/Charts.vue';
@Component({
    components: {
        Charts
    }
})
export default class ChartsData extends Vue {
    @Provide() tabPosition: string = 'line';
    @Provide() chartData: any = {
        xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        yAxisData: [820, 949, 899, 944, 1290, 1330, 1290]
    };
}
</script>

<style lang="scss" scoped>
</style>
