<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <logo></logo>
    <h3 class="text-gray-400 pt-7">Pagina en desarrollo...</h3>
  </div>
</template>

<script>
import data from "../../data";

import Logo from "../components/Logo.vue";

export default {
  components: {
    Logo,
  },
  data() {
    return {
      info: data,
    };
  },
};
</script>
