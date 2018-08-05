export class Person {
  constructor(birthTime) {
    this.birthTime = birthTime;
  }

  getSecondsAge(){
    const birthTime = new Date(this.birthTime);
    const nowTime= new Date();
    const secondsAge = Math.floor(nowTime - birthTime) /1000;
    return secondsAge;
  }

}
