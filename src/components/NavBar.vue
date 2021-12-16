<template>
    <nav id="navigation">
        <a v-if="$route.name != 'Home'" @click="$router.go(-1)"><i class="fas fa-arrow-left"></i></a>
        <router-link :to="{name: 'User Info'}" class="pull-right"><i class="fas fa-user-circle"></i></router-link>
    </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
#navigation {
    position: absolute;
    top: 0; left: 0; right: 0;
    text-align: left;
    background: #14c4fa;
    font-size: 150%;
    padding: .5em;
}

#navigation a {color: #fff; cursor: pointer;}

.pull-right {
    float: right;
}
</style>
