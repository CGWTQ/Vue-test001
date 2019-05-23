<template>
    <div>
        <ul>
            <li v-for="item in list">
                <img v-lazy="item">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "imageAll"
    }
</script>

<style scoped>
    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
</style>