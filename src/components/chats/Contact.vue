<template>
    <div>
        <img class="rounded-circle" :src="`http://placehold.it/40/007bff/fff&text=${user.username[0].toUpperCase()}`" />
        <!-- <p>{{user.username}}</p> -->
    </div>
</template>

<script>
export default {
    name: 'contact',
    props: ["user"]
}
</script>

<style scoped>

</style>