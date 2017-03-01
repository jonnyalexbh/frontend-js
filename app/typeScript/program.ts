/*
* class program
*/
class program {
  /*
  * attributes or properties
  */
  public name:string;
  public version:number;
  /*
  * get
  */
  public getName(){
    return this.name;
  }
  public getVersion(){
    return this.version;
  }
  /*
  * set
  */
  public setName(name:string){
    this.name = name;
  }
  public setVersion(version:number){
    this.version = version;
  }
}
/*
* class videoEditor
*/

class videoEditor extends program {
  /*
  * attributes or properties
  */
  public timeLine:number;
  /*
  * get
  */
  public getTimeLine(){
    return this.timeLine;
  }
  /*
  * set
  */
  public setTimeLine(timeLine:number){
    this.timeLine = timeLine;
  }
  /*
  * get AllData
  */
  public getAllData():string{
    return this.getName()+" - "+ this.getVersion()+ " - "+this.getTimeLine();
  }
}
/*
* instantiate object
*/
var editor = new videoEditor();
editor.setName("Laravel");
editor.setVersion(8);
editor.setTimeLine(4000);

console.log(editor.getAllData());
