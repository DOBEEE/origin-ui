<template>
    <div>
        <div class="test_demo">测试</div>
        <Demo1 />
    </div>
</template>

<script>
import Demo1 from "../demo";
export default {
    components: { Demo1 }
};
</script>

<style lang="less">
.test_demo {
    color: #333;
}
</style>