<template>
  <div class="calculator">
    <div class="result">{{ previous }}</div>
    <div class="result">{{ current }}</div>
    <button class="span-2" v-on:click="clear()">Clear</button>
    <button v-on:click="remove()">Del</button>
    <button>/</button>
    <button v-on:click="append(7)">7</button>
    <button v-on:click="append(8)">8</button>
    <button v-on:click="append(9)">9</button>
    <button>*</button>
    <button v-on:click="append(4)">4</button>
    <button v-on:click="append(5)">5</button>
    <button v-on:click="append(6)">6</button>
    <button>-</button>
    <button v-on:click="append(1)">1</button>
    <button v-on:click="append(2)">2</button>
    <button v-on:click="append(3)">3</button>
    <button v-on:click="operation('+')">+</button>
    <button v-on:click="append(0)">0</button>
    <button v-on:click="dot()">.</button>
    <button class="span-2">=</button>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      a: 0,
      b: 0,
      current: "0",
      previous: "",
      operatorClicked: false,
    };
  },
  methods: {
    append(number) {
      if (this.current == "0") {
        this.current = "";
      }
      if (this.operatorClicked == true) {
        this.current = "";
      }
      this.current = this.current + number;
      this.operatorClicked = false;
    },
    operation(operator) {
      if (this.operatorClicked == true) {
        return;
      }
      if (this.current == " + ") {
        return;
      }
      if (this.previous.includes("+")) {
        console.log("ada");
      }
      if (operator == "+") {
        this.a = this.a + parseInt(this.current);
        this.previous = this.previous + this.current + " " + operator + " ";
        this.current = this.a;
      }
      this.operatorClicked = true;
    },
    remove() {
      if (this.current.length != 1) {
        this.current = this.current.slice(0, -1);
      } else {
        this.current = "0";
      }
    },
    multiply() {},
    subtract() {},
    divide() {},
    dot() {
      if (this.current.indexOf(".") === -1) {
        this.current = this.current + ".";
      }
    },
    clear() {
      this.a = 0;
      this.previous = "";
      this.current = "0";
    },
  },
};
</script>

<style scoped>
.calculator {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(5, 100px);
  padding: 90px;
}
button {
  background-color: aliceblue;
  border: 1px solid white;
  cursor: pointer;
  outline: none;
  color: black;
}
button:focus {
  border: 1px solid whitesmoke;
  outline: none;
}
button:hover {
  background-color: ghostwhite;
}

.span-2 {
  grid-column: span 2;
}
.result {
  grid-column: 1/-1;
  background-color: honeydew;
}
</style>
