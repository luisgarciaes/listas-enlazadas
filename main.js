class Product{
    constructor(id,name,units,cost){
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
class Inventory{
    constructor(){
        this.start=null;
    }
    add(x){
        if(this.start==null){this.start=x;}
        else{this._add(x,this.start)}
    }
    _add(x,y){
        if(y.next==null){y.next=x}
        else{this._add(x,y.next)}
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
    search(id){
        if (!this.start)
          return null;
        let aux=this.start;
        while(aux!=null){
          if (aux.id==id)
            return aux;
          aux=aux.next;
        }
        return null;
      }


}
class App{
    
}

let i=new Inventory();
let p1=new Product(1,1,1,1,1);
i.add(p1);
p1=new Product(2,1,1,1,1);
i.add(p1);
p1=new Product(3,3,3,3,3);
i.add(p1);
p1=new Product(4,1,1,1,1);
i.add(p1);
p1=new Product(5,1,1,1,1);
i.add(p1);
p1=new Product(7,1,1,1,1);
i.add(p1);
console.log(i.list());
console.log(i.search());
