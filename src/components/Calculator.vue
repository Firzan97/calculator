<template>
  <div>
    <div class="calculator-type p-4">
      <b-button
        v-on:click="isHidden = false"
        variant=" outline-primary"
        id="scientific shadow-sm"
        v-if="isHidden"
        >Normal</b-button
      >
      <b-button
        v-on:click="isHidden = true"
        variant=" outline-primary"
        id="scientific shadow-sm"
        v-else
        >Scientific</b-button
      >
    </div>
    <b-container class="calculator shadow-lg p-3 mb-5 bg-white rounded p-5">
      <div class="result">{{ previous }}</div>
      <div class="result">{{ current }}</div>
      <button class="span-2" v-on:click="clear()">Clear</button>
      <button v-on:click="remove()">Del</button>
      <button v-on:click="operation('/')">/</button>
      <button v-on:click="append(7)">7</button>
      <button v-on:click="append(8)">8</button>
      <button v-on:click="append(9)">9</button>
      <button v-on:click="operation('*')">*</button>
      <button v-on:click="append(4)">4</button>
      <button v-on:click="append(5)">5</button>
      <button v-on:click="append(6)">6</button>
      <button v-on:click="operation('-')">-</button>
      <button v-on:click="append(1)">1</button>
      <button v-on:click="append(2)">2</button>
      <button v-on:click="append(3)">3</button>
      <button v-on:click="operation('+')">+</button>
      <button v-on:click="append(0)">0</button>
      <button v-on:click="dot()">.</button>
      <button v-on:click="operation('=')" class="span-2">=</button>
      <button v-if="isHidden" class="scientific" v-on:click="operation('sqrt')">
        sqr()
      </button>
      <button
        v-if="isHidden"
        class="scientific"
        v-on:click="operation('factor')"
      >
        n!
      </button>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      type: "Scientific",
      isHidden: false,
      a: 0,
      b: 0,
      current: "0",
      previous: "",
      operatorClicked: false,
      latestOperator: "",
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
      switch (operator) {
        case "+":
          this.add();
          break;
        case "-":
          this.subtract();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.divide();
          break;
        case "=":
          this.equal();
          break;
        case "sqrt":
          this.sqrt();
          break;
        case "factor":
          this.factor();
          break;
      }
    },
    factor() {
      this.a = 1;
      this.latestOperator = "factor";
      if (this.current == " factor() ") {
        return;
      }
      var temp;
      for (temp = parseInt(this.current); temp > 0; temp--) {
        this.a = this.a * parseFloat(temp);
        console.log(parseFloat(temp));
      }
      this.previous = "factor(" + parseFloat(this.current) + ") ";
      this.current = this.a;
    },
    sqrt() {
      this.latestOperator = "sqrt";

      if (this.current == " sqrt() ") {
        return;
      }
      this.a = parseFloat(this.current) * parseFloat(this.current);

      this.previous = "sqrt(" + parseFloat(this.current) + ") ";
      this.current = this.a;
    },
    add() {
      if (this.operatorClicked == true) {
        return;
      }
      if (this.current == " + ") {
        return;
      }
      if (this.latestOperator == "sqrt" || this.latestOperator == "factor") {
        this.previous = this.current + " + ";
      } else {
        this.a = this.a + parseFloat(this.current);
        this.previous = this.previous + this.current + " + ";
      }

      this.current = this.a;

      this.operatorClicked = true;
      this.latestOperator = "+";
    },
    remove() {
      if (this.current.length != 1) {
        this.current = this.current.slice(0, -1);
      } else {
        this.current = "0";
      }
    },
    multiply() {
      this.latestOperator = "*";

      if (this.a == 0) {
        this.a = 1;
      }
      if (this.operatorClicked == true) {
        return;
      }
      if (this.current == " * ") {
        return;
      }

      this.a = this.a * parseFloat(this.current);
      this.previous = this.previous + this.current + " * ";
      this.current = this.a;

      this.operatorClicked = true;
    },
    subtract() {
      this.latestOperator = "-";

      if (this.operatorClicked == true) {
        return;
      }
      if (this.current == " - ") {
        return;
      }

      if (this.a == 0) {
        this.a = Math.abs(parseFloat(this.current));
      } else {
        this.a = this.a - parseFloat(this.current);
      }

      this.previous = this.previous + this.current + " - ";
      this.current = this.a;

      this.operatorClicked = true;
    },
    divide() {
      this.latestOperator = "/";

      if (this.operatorClicked == true) {
        return;
      }
      if (this.current == " / ") {
        return;
      }

      if (this.a == 0) {
        this.a = Math.abs(parseFloat(this.current));
      } else {
        this.a = this.a / parseFloat(this.current);
      }

      this.previous = this.previous + this.current + " / ";
      this.current = this.a;

      this.operatorClicked = true;
    },
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
    equal() {
      if (this.operatorClicked == true) {
        return;
      }
      this.operatorClicked = true;

      switch (this.latestOperator) {
        case "+":
          this.a = this.a + parseFloat(this.current);
          this.previous = this.previous + this.current + " = ";
          this.current = this.a;
          break;
        case "-":
          this.a = this.a - parseFloat(this.current);
          this.previous = this.previous + this.current + " = ";
          this.current = this.a;
          break;
        case "*":
          this.a = this.a * parseFloat(this.current);
          this.previous = this.previous + this.current + " = ";
          this.current = this.a;
          break;
        case "/":
          this.a = this.a / parseFloat(this.current);
          this.previous = this.previous + this.current + " = ";
          this.current = this.a;
          break;
      }
    },
  },
};
</script>

<style scoped>
.calculator {
  width: auto;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: minmax(120px, auto) repeat(7, 100px);
}

.scientific:hover {
  background-color: lightskyblue;
  cursor: pointer;
  color: black;
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
