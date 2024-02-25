<template>
  <div id="parent">

    <router-view  />
  </div>
</template>

<script>

export default {
  
};
</script>

<style>
#parent {
  background: rgb(78, 39, 109);
  background: radial-gradient(
    circle,
    rgba(78, 39, 109, 1) 32%,
    rgba(109, 50, 152, 1) 53%,
    rgba(45, 29, 71, 1) 100%
  );
}
</style>
