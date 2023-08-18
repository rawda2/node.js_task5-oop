//rectangle class

class Rectangle {
    length: number;
  width: number;

  constructor( length: number,  width: number) {
    this.length =length;
    this.width =  width;
  }
  

  getlength(): string {
    return the length is:${this.length};
  }
  getwidth(): string {
    return the width is:${this.width};
  }

  getArea(): string {
    return The area is:${ this.length* this.width};
  }

  getPerimeter(): string {
return The perimeter is ${    2 * (this. length + this.width)};
  }

}

const rectangle = new Rectangle(5.6, 7.8);
console.log(rectangle.getlength()); 
console.log(rectangle.getwidth()); 
console.log(rectangle.getArea()); 
console.log(rectangle.getPerimeter());


//Employee Class

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
    return Employee:id=${this.id},name=${this.name},salary=${this.salary};
  }
} 

const employee = new Employee(8, "Peter Tan", 999);



console.log("id is:", employee.getId()); // Output: id is: 8
console.log("firstname is:", employee.getName().split(" ")[0]); 
console.log("lastname is:", employee.getName().split(" ")[1]); 
console.log("salary is:", employee.getSalary());
console.log("name is:", employee.getFullName());
console.log("annual salary is:", employee.getAnnualSalary());

console.log(employee.raiseSalary(10));
console.log(employee.toString());
