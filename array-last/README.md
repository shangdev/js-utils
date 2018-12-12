## array-last

```js
last([1, 2, 3, 4, 5]); // 5
last([{a: 1}, {b: 1}, {c: 1}]); // {c: 1}
last([true, false, [true, false]]); // [true, false]
last(); // undefined
last([]); // undefined
last(null); // undefined
last(undefined); // undefined
```