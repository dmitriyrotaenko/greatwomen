export default class Woman {
  constructor(id) {
    this.id = id; 
  }

  async getResults() {

    const URL = 'https://jsonstorage.net/api/items/79b8af27-5ede-4dbb-b360-c3a63116849d';


    const res = await fetch(URL) 
    .then(res => res.json());

    this.results = res;
    this.name = this.results.women[this.id].name;
    this.info = this.results.women[this.id].info;
    this.quote = this.results.women[this.id].quote;
  }
}