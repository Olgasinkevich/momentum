import {Utils} from "./_utils";

const QUOTES = [
  {
    "text": "Пишите код так, как будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете",
    "author": "Стив Макконнелл"
  },
  {
    "text": "Сложность программы растет до тех пор, пока не превысит способности программиста",
    "author": "Артур Блох. Законы Мэрфи"
  },
  {
    "text": "Ходить по воде и разрабатывать программы, следуя ТЗ, очень просто… если они заморожены",
    "author": "И. Берард"
  }
];


export class Quote extends Utils {
  constructor() {
    super();
    this.quotePosition = this.getPosition('.quote');
    this.authorPosition = this.getPosition('.author');
    this.buttonPosition = this.getPosition('.change-quote');
    this.index = 0;
    this.data = null;
    this.init();
  }

  init() {
    this.getQuotes();
    this.showQuotes();
    this.button();
  }

  getQuotes() {
   this.data = QUOTES;
  }

  showQuotes() {
    this.quotePosition.textContent = this.data[this.index].text;
    this.authorPosition.textContent = this.data[this.index].author;
  };

  button() {
    this.buttonPosition.addEventListener('click', () => {
      this.index++;
      if(this.index >= this.data.length){
        this.index = 0;
      }
      this.showQuotes();
    })
  }

}
