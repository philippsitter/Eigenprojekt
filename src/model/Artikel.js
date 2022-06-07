
/**
 * Klasse zum Beschreiben eines Artikels
 *
 * @property {Number}  counter - dient zur Erzeugung eindeutiger Artikel-IDs fängt bei x an zu zählen
 * @property {Number}  id      - eindeutige ID-Nummer des Artikels
 * @property {Number}  index   - Position des Artikels innerhalb der Artikelliste
 * @property {String}  name    - Name des Artikels
 * @property {Boolean} gekauft - merkt sich, ob der Artikel bereits gekauft wurde
 */

class Artikel {
  static counter = 1
  id = Artikel.counter++
  index
  name
  gekauft = false

  /**
   *In der Methode Constructor werden name und index initialisiert
   */

  constructor(name, index) {
    this.name = name
    this.index = index
  }
}

/**
 *erstellt eine Instanz der Klasse Artikel
 */
//let apfel = new Artikel("Apfel", 0)

export default Artikel