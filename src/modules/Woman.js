export default class Woman {
  constructor(id) {
    this.id = id; 
  }

  async getResults() {
    const URL = 'https://api.jsonbin.io/b/5f5fa02f7243cd7e823c2137';
    this.results = await fetch(URL) 
    .then(res => res.json());

    let matchedID;
    const women = this.results.women;

    for(let woman of women) {
      for(let [prop, val] of Object.entries(woman)) {
        if(prop === 'id' && val == this.id) {
          matchedID = parseInt(val) - 1; // array is zero-based
          break;
        }
      }
    }
    
    return women[matchedID];
  }
}