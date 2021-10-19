class Person{
    constructor(idCode,name){
        this.name=name;
        this.idCode=idCode;
        this.next=null;
    }
}

class Group{
    constructor(){
        this.start=null;
    }
    add(x){
        if (this.start==null){
            this.start=x;
        } else {
            let temp=this.start;
            while (temp.next!=null){
                temp=temp.next;
            }
            temp.next=x;
        }
    }
    list(){
        let arr = new Array;
        if (this.start==null){
            return null;
        } else {
            let temp=this.start;
            arr.push(`${temp.idCode}: ${temp.name}`)
            while (temp.next!=null){
                arr.push(`${temp.next.idCode}: ${temp.next.name}`)
                temp=temp.next;
            }
            return arr;
        }
    }
}
g = new Group
x = new Person(1,"Luis")
g.add(x)
x = new Person(2,"Gerardo")
g.add(x)
x = new Person(3,"García Espinoza")
g.add(x)

g.list()
