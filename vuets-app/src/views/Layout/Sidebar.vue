<template>
    <el-scrollbar class="el-scrollbar">
        <el-menu class="el-menu-slide" :default-active="$router.currentRoute.path" router>
            <template v-for="item in getRouters">
                <!-- 此处无法使用v-show。因为判断条件item是循环出来的。而页面初始化时，getROuters为空。所以使用v-show时会报错。 -->
                <!-- template中的v-for不能搭配 :key, 但可以将其放置下一个元素中 -->
                <div
                    v-if="item.hidden&& item.children && item.children.length > 0"
                    :key="item.name"
                >
                    <el-menu-item v-if="item.children.length==1" :index="item.children[0].path">
                        <i v-if="item.children[0].meta.icon" :class="item.children[0].meta.icon"></i>
                        <span slot="title">{{ item.children[0].meta.title }}</span>
                    </el-menu-item>

                    <!-- 多个元素 -->
                    <el-submenu v-else :index="item.children[0].path" :key="item.name">
                        <template slot="title">
                            <i v-if="item.meta.icon" :class="item.meta.icon"></i>
                            <span
                                v-if="item.meta && item.meta.title"
                                slot="title"
                            >{{ item.meta.title }}</span>
                        </template>
                        <el-menu-item
                            v-for="child in item.children"
                            :index="child.path"
                            :key="child.name"
                        >
                            <i v-if="child.meta.icon" :class="child.meta.icon"></i>
                            <span v-if="child.meta">{{ child.meta.title }}</span>
                        </el-menu-item>
                    </el-submenu>
                </div>
            </template>
        </el-menu>
    </el-scrollbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Mutation, Action } from 'vuex-class';
@Component({
    components: {}
})
export default class SideBar extends Vue {
    @Getter('routers') getRouters: any;

    created() {
        console.log(123, this.getRouters);
    }
}
</script>

<style lang="scss" scoped>
.el-scrollbar {
    height: 100%;
    border-right: 1px solid #e6e6e6;
    background: #fff;
    .el-menu-slide {
        border-right: none;
        i {
            margin-right: 5px;
            width: 24px;
            text-align: center;
            font-size: 18px;
        }
    }
}
</style>



