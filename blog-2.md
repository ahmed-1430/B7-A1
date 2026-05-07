# Generics in TypeScript

## Introduction

Generics help us write reusable code in TypeScript. We can use one function with different types, but TypeScript still keeps the correct type.

## Without Generics

Without generics, we may need to write separate functions for different data types.

```ts
function getFirstNumber(items: number[]): number {
  return items[0];
}

function getFirstString(items: string[]): string {
  return items[0];
}
```

These functions do the same work, so the code is repeated.

## With Generics

Using generics, we can write one function for many types.

```ts
function getFirstItem<T>(items: T[]): T {
  return items[0];
}

const numberItem = getFirstItem([1, 2, 3]);
const stringItem = getFirstItem(["A", "B", "C"]);
```

Here, `T` changes based on the type of data we pass. If we pass numbers, it works with numbers. If we pass strings, it works with strings.

## Generic Constraint

We can also make generics safer by adding rules.

```ts
function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key];
}

const user = { id: 1, name: "John" };
const name = getProperty(user, "name");
```

Here, the key must exist in the object.


