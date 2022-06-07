class Handy {
  constructor(marke, nummer) {
   this.hersteller = "samsung"
    this.marke = marke
    this.nummer = nummer
  }
}

let meinHandy = new Handy("galaxy s10", 1234)
console.debug(meinHandy.hersteller)