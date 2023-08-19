//1.1
class circle1{
    private radius:number;
    private color:string;

     constructor( radius: number,  color: string) {
    this.radius =radius;
    this.color = color;
  } 

    setradius(radius:number):void{
        this.radius=radius;
    }
     setcolor(color:string):void{
        this.color=color;
    }
    getradius(){
        return `The Radius Of Circle Is ${this.radius}`;
    }
      getcolor(){
        return `The Color Of Circle Is ${this.color}`;
    }
    toString():string{
        return `Circle[radius is ${this.radius},Color is ${this.color}]`;
    }
     getArea():string{
         return `The Area Of Circle =${this.radius*this.radius*3.14}`;
     
}
}


const cir1=new circle1(2,"Black");
console.log(cir1.toString());
console.log(cir1.getradius());
console.log(cir1.getcolor());
console.log(cir1.getArea());
cir1.setradius(10);
console.log(cir1.getradius());
console.log(cir1.getArea());

console.log("___________________________________________________");

//1.2
class circle2{
    private radius:number;
    
     constructor( radius: number) {
    this.radius =radius;
  
  } 

    setradius(radius:number):void{
        this.radius=radius;
    }
    
    getradius(){
        return `The Radius Of Circle Is ${this.radius}`;
    }
    
    toString():string{
        return `Circle[radius is ${this.radius}]`
    }
     getArea():string{
         return `The Area Of Circle =${this.radius*this.radius*Math.PI}`
     }
    getcircumference():string{
         return `The circumference Of Circle =${this.radius*Math.PI*2}`
     }
}


const cir2=new circle2(2);
console.log(cir2.toString());
console.log(cir2.getradius());
console.log(cir2.getArea());
cir2.setradius(10);
console.log(cir2.getradius());
console.log(cir2.getcircumference());


console.log("___________________________________________________");

//1.3

class Rectangle {
    length: number;
  width: number;

  constructor( length: number,  width: number) {
    this.length =length;
    this.width =  width;
  }
  

  getlength(): string {
    return `the length is:${this.length}`;
  }
  getwidth(): string {
    return `the width is:${this.width}`;
  }

  getArea(): string {
    return `The area is:${ this.length* this.width}`;
  }

  getPerimeter(): string {
return `The perimeter is ${    2 * (this. length + this.width)}`;
  }

}

const rectangle = new Rectangle(5.6, 7.8);
console.log(rectangle.getlength()); 
console.log(rectangle.getwidth()); 
console.log(rectangle.getArea()); 
console.log(rectangle.getPerimeter());

console.log("___________________________________________________");

//1.4

class Employee {
  private id: number;
  private name: string;
  private salary: number;

  constructor(id: number, name: string, salary: number) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getSalary(): number {
    return this.salary;
  }

  setName(name: string): void {
    this.name = name;
  }

  setSalary(salary: number): void {
    this.salary = salary;
  }

  getFullName(): string {
    return this.name;
  }

  getAnnualSalary(): number {
    return this.salary * 12;
  }

  raiseSalary(percent: number) {
   return this.salary += this.salary * (percent / 100);
  }
  toString(): string {
    return `Employee:id=${this.id},name=${this.name},salary=${this.salary}`;
  }
} 

const employee = new Employee(8, "Peter Tan", 999);



console.log("id is:", employee.getId()); 
console.log("firstname is:", employee.getName().split(" ")[0]); 
console.log("lastname is:", employee.getName().split(" ")[1]); 
console.log("salary is:", employee.getSalary());
console.log("name is:", employee.getFullName());
console.log("annual salary is:", employee.getAnnualSalary());

console.log(employee.raiseSalary(10));
console.log(employee.toString());

console.log("___________________________________________________");

//1.5
 
class InvoiceItem{
    private id: String;
    private  desc: String;
    private qty: number;
    private unitPrice:number;
    
    constructor(id: String, desc:String,qty:number,unitPrice:number)
    {
        this.id=id;
        this.desc=desc;
        this. qty=qty;
        this.unitPrice=unitPrice;
    }
    getId(): String{
        return `The ID Of item IS ${this.id}`
    }
    getDesc(): String{
        return `The Description Of item IS ${this.desc}`
    }
    setId(id:string):void{
        this.id=id;
    }
    setQty (qty: number):void{
        this.qty=qty;
        
    }
    
    getQty(): string{
        return `The Qty of Items is ${this.qty}`
        
    }
    getUnitPrice(): string{
        return `The Unit Price is ${this.unitPrice}`
    }
    setUnitPrice(unitPrice:number):void{
        this.unitPrice=unitPrice;
    }
    getTotal(): string{
        return `The Total price is ${this.qty*this.unitPrice}`
        
    }
    
    toString(): String{
        return `InvoiceItem[id=${this.id},desc=${this.desc},qty=${this.qty},unitPrice=${this.unitPrice}]`
    }
}



const item=new InvoiceItem("A101","Pen Red",888,0.08);
console.log(item.toString());
item.setQty(999);
item.setUnitPrice(0.99);
console.log(item.toString());
console.log(item.getId());
console.log(item.getDesc());
console.log(item.getQty());
console.log(item.getUnitPrice());
console.log(item.getTotal());


console.log("___________________________________________________");


//1.6
class Account {
  private id: string;
  private name: string;
  private balance: number;

  constructor(id: string, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getBalance(): number {
    return this.balance;
  }

  setName(name: string): void {
    this.name = name;
  }

  setBalance(balance: number): void {
    this.balance = balance;
  }

  credit(amount: number){
    return this.balance += amount;
  }

  debit(amount: number) {
    if (amount<=  this.balance) {
  
      this.balance -= amount;
    }
      else{
          console.log ("Amount exceeded balance");
      }
     
   
  }




     transferto(amount: number, destinationAccount: Account) {
    if (amount <= this.balance) {

        this.balance -= amount;
    destinationAccount.credit(amount);
      
     
    }
         else{
             console.log("Amount exceeded balance");
      
         }
     
  }

  toString(): string {
    return `Account[id=${this.id},name=${this.name},balance=${this.balance}]`;
  }
}


const account1 = new Account("A101", "Tan Ah Teck", 88);
console.log(account1.toString()); 

const account2 = new Account("A102", "Kumar", 0);
console.log(account2.toString()); 

console.log("ID:", account1.getId());
console.log("Name:", account1.getName()); 
console.log("Balance:", account1.getBalance()); 

account1.credit(100);
console.log(account1.toString()); 

account1.debit(50);
console.log(account1.toString()); 

 account1.debit(200);
console.log(account1.toString());
 account1.transferto(100,account2);
console.log(account1.toString());
console.log(account2.toString());


console.log("___________________________________________________");

//1.7
class Date1{
    private day: number;

   private month: number;

     private year:number;
   constructor (day: number, month: number, year: number){
       this.day=day;
       this.month=month;
       this.year=year;
   }
    getDay(): string {
        return `Day: ${this.day}`;
    }
   getMonth(): string {
        return `Month: ${this.month}`;
    }
    getYear(): string {
        return `year: ${this.year}`;
    }
     setDay(day: number):void{
        this.day=day;
    }
    setMonth(month: number):void{
        this.month=month;
    }
    setYear (year: number):void{
        this.year=year;
    } 
    setDate(day: number, month: number, year: number):void{
         this.day=day;
       this.month=month;
       this.year=year;
    }
     toString(): String{
         
         const formattedDay = this.day < 10 ? `0${this.day}` : `${this.day}`;
  const formattedMonth = this.month < 10 ? `0${this.month}` : `${this.month}`;
  return `${formattedDay}/${formattedMonth}/${this.year}`;
     }

    
}

const d1=new Date1(1,2,2014);
console.log(d1.toString());
d1.setMonth(12);
d1.setDay(9);
d1.setYear(2099);
console.log( d1.toString());

console.log( d1.getMonth());
console.log( d1.getDay());
console.log( d1.getYear());
d1.setDate(3,4,2016);
console.log( d1.toString());


console.log("___________________________________________________");

//1.8

 class time{
   private  hour: number;
    private minute: number;

  private second: number;
  
  constructor(hour: number,minute:number, second: number){
      this.hour=hour;
      this.minute=minute;
      this.second=second;
  }
getHour ():string{
    return `Hour: ${this.hour}`;
}
    getMinute(): string{
         return `Minute: ${this.minute}`;
    }
 getSecond(): string{
         return `Second: ${this.minute}`;
    }
setHour (hour: number):void{
    this.hour=hour
}

setMinute (minute: number):void{
   this.minute=minute; 
} 
setSecond (second: number):void{
    this.second=second;
}
setTime(hour:number , minute:number, second: number):void{
     this.hour=hour;
      this.minute=minute;
      this.second=second;
    
}

toString(): String{
       const formattedhour = this.hour < 10 ? `0${this.hour}` : `${this.hour}`;
   const formattedminute = this.minute < 10 ? `0${this.minute}` : `${this.minute}`;
   const formattedsecond = this.second < 10 ? `0${this.second}` : `${this.second}`;
    
     return `${formattedhour}:${formattedminute}:${formattedsecond}`;
}
 nextSecond(time:time){
      let nextHour = this.hour;
    let nextMinute = this.minute;
    let nextSecond = this.second + 1;

    if (nextSecond >= 60) {
      nextSecond = 0;
      nextMinute += 1;
      if (nextMinute >= 60) {
        nextMinute = 0;
        nextHour += 1;
        if (nextHour >= 24) {
          nextHour = 0;
        }
      }
    }
      this.hour=nextHour;
    this.minute=nextMinute;
    this.second=nextSecond;

    return  time;
 }
preSecond(time:time){
     let prevHour = this.hour;
    let prevMinute = this.minute;
    let prevSecond = this.second - 1;

    if (prevSecond < 0) {
      prevSecond = 59;
      prevMinute -= 1;
      if (prevMinute < 0) {
        prevMinute = 59;
        prevHour -= 1;
        if (prevHour < 0) {
          prevHour = 23;
        }
      }
    }
    this.hour=prevHour;
    this.minute=prevMinute;
    this.second=prevSecond;

    return  time;
 }
}


 const t1 = new time(1, 2, 3);
console.log(t1.toString());
 t1.setHour(4);
t1.setMinute(5);
t1.setSecond(6);
console.log(t1.toString());
console.log( t1.getHour());
console.log( t1.getMinute());
console.log( t1.getSecond());
 t1.setTime(23, 59, 58);
console.log(t1.toString());
 t1.nextSecond(t1);
console.log(t1.toString());
 t1.nextSecond(t1);
 t1.nextSecond(t1);

console.log(t1.toString());
 t1.preSecond(t1);
console.log(t1.toString());
 t1.preSecond(t1); 
t1.preSecond(t1);
console.log(t1.toString());

console.log("___________________________________________________");













