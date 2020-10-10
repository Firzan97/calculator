<template>
  <div class="calculator">
    <button>Clear</button>
    <button>Del</button>
    <button>/</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>*</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>-</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>+</button>
    <button>0</button>
    <button>.</button>
    <button>=</button>
  </div>
</template>

<script>
export default {
  name: "Calculator",
};
</script>

<style scoped>
.calculator {
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 90px;
}
</style>
