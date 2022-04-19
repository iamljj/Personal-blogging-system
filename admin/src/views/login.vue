<template>
  <div class="father" @click="oopString('bar')">dianji</div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
      i: 0,
    };
  },
  methods: {
    oopString(str) {
     
      console.log('a',1);
    },
  },
};
</script>

<style lang='scss'>
</style>