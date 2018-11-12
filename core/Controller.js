
class Controller {
  constructor(functions) {
    this.functions = functions;
  }

  export() {
    return this.functions;
  }
};

module.exports = Controller;
