<template>
  <div>
    <div v-if="this.$q.dark.isActive">true</div>
    <div v-else>false</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from 'quasar'
export default {
  data() {
    return {};
  },
};
</script>

<style></style>
