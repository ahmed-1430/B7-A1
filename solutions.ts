// Problem No 1: Return only the even numbers from the array.
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 === 0);
}



// Problem No 2: Reverse the input string and return the reversed result.
function reverseString(text: string): string {
  return text.split("").reverse().join("");
}



// Problem No 3: Use a union type and type guard to check the input type.
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): "String" | "Number" {
  return typeof value === "string" ? "String" : "Number";
}



// Problem 4: Return a property value from an object using a safe generic key.
function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}



// Problem 5: Define the shape of a book object.
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

class Person {
  constructor(public name: string, public age: number) { }
}


class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}



// Problem 7: Return numbers that exist in both arrays.
function getIntersection(firstArray: number[], secondArray: number[]): number[] {
  return firstArray.filter((number) => secondArray.includes(number));
}

