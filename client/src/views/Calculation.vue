<template>
  <div class="calculator">
    <Calculator />
  </div>
</template>

<script>
import Calculator from "../components/Calculator";

export default {
  name: "Calculation",
  components: {
    Calculator,
  },
};
</script>

<style scoped>
.calculator {
  margin-top: 20px;
}
</style>
