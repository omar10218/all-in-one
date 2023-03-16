<template>
    <van-nav-bar class="nav-bar" title="ALL IN ONE 專區"></van-nav-bar>
    <div id="div-h100" style="position: relative;z-index: 0;">
        <div id="div-h100" class="div-left" :style="leftCss">
            <el-menu
                class="el-menu-vertical-demo"
                :collapse="isCollapse"
                @mousemove="getStyle(true)"
                @mouseleave="getStyle(false)"
                unique-opened="true"
                :style="menuCss"
            >
                <template v-for="(item, index) in title" :key="item">
                    <el-sub-menu :index="index">
                        <template #title>
                            <el-icon>
                                <location />
                            </el-icon>
                            <span>{{ item.name }}</span>
                        </template>
                        <el-menu-item-group>
                            <template v-for="(item2, index2) in item.detail" :key="item2">
                                <el-menu-item :index="index + index2">
                                    <router-link :to="item.detailRouter[index2]">{{ item2 }}</router-link>
                                </el-menu-item>
                            </template>
                            <!-- <el-menu-item :index="index + '2'">item two</el-menu-item> -->
                        </el-menu-item-group>
                    </el-sub-menu>
                </template>
            </el-menu>
        </div>
        <div id="div-h100" class="div-right" :style="rightCss">
            <p>{{ title[0] }}</p>
            <router-view />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";

interface menu {
    name: string;
    icon: string;
    detail: string[];
    detailRouter: string[];
}

//登入參數
const props = defineProps({
    name: {
        type: String,
    },
    pass: {
        type: String,
    },
});
console.log(props);

//menu頁面css
const leftCss = { width: "5%" };
const rightCss = { width: "95%" };
let menuCss = {
    position: "absolute",
    width: "5%",
    "z-index": "3",
    height: "100%",
};

let title: menu[] = [
    { name: "廣宣專區", icon: "bg-colors", detail: ["廣宣1"], detailRouter: ["/advertiseView1"] },
    { name: "需求單專區", icon: "form", detail: ["需求1"], detailRouter: ["/demandListView1"] },
    { name: "優惠券專區", icon: "euro-circle", detail: ["優惠1"], detailRouter: ["/couponView1"] },
];

//menu選單操作
const isCollapse = ref(true);
function getStyle(boolean: boolean) {
    if (boolean) {
        isCollapse.value = false;
        menuCss = {
            position: "absolute",
            width: "10%",
            "z-index": "3",
            height: "100%",
        };
    } else {
        isCollapse.value = true;
        menuCss = {
            position: "absolute",
            width: "5%",
            "z-index": "3",
            height: "100%",
        };
    }
}
</script>

<style>
.van-nav-bar {
    background: #007979 !important;
}

#div-h100 {
    height: 100%;
}

.div-left {
    float: left;
    background-color: antiquewhite;
}

.div-right {
    float: left;
}
</style>


