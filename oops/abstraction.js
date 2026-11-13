class CoffeeMachine {
    #waterTemp;

    constructor() {
        this.#waterTemp = 0;
    }

    // These are PRIVATE implementation details
    #boilWater() {
        this.#waterTemp = 100;
        console.log("Water boiled to 100°C");
    }

    #grindBeans() {
        console.log("Beans ground to fine powder");
    }

    #brewCoffee() {
        console.log("Coffee brewed!");
    }

    // This is the ABSTRACT interface — simple for the user
    makeCoffee() {
        this.#boilWater();
        this.#grindBeans();
        this.#brewCoffee();
        console.log("☕ Your coffee is ready!");
    }
}

const machine = new CoffeeMachine();
machine.makeCoffee();      // ✅ Just one simple call
// machine.#boilWater();   // ❌ Cannot access private method