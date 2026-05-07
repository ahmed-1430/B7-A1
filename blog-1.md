# `any` vs `unknown` in TypeScript

## Introduction

In TypeScript, `any` and `unknown` both can hold any kind of value. But they are not the same. `any` is risky because it removes type checking, while `unknown` is safer because we have to check the type before using it.

## Why `any` Is Risky

When we use `any`, TypeScript does not show errors even if we use the wrong method.

```ts
let value: any = "Hello";

value.toFixed(2);
```

This code will compile, but it will give an error at runtime because `toFixed()` is for numbers, not strings.

## Why `unknown` Is Better

With `unknown`, TypeScript forces us to check the type first.

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  value.toUpperCase();
}
```

This is safer because we only use string methods after confirming the value is a string.

## Type Narrowing

Type narrowing means checking the type and then using it safely.

```ts
function checkValue(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "number") {
    return value.toString();
  }

  return "Unknown value";
}
```

