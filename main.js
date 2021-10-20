class Product{
    constructor(id,name){
        this._id = id;
        this._name = name;
        this._units = units;
        this._cost = cost;
        this._totalCost = this._units * this._cost;
        this.next=null;
    }
    info(){
        return this._id + ":-> " + this._name;
      }
  }
}
class Inventory{
    constructor(){
        this.start=null;
    }
    add(){
        if(this.start==null){this.start=x;}
        else{this.add(x,this.start)}
    }
    _add(){
        if(last.next==null){last.next=nuevo}
        else{this._agregar(nuevo,last.next)}
    }

    list(){
        let x = '';
        let temp=this.start;
        while (temp!=null){
          x += temp.info() + "\n"
          temp=temp.next;
        }
        return x;
    }


}
class App{
    
}
