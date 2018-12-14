## array-remove

```js
remove([1, 2, 3, 4, 5, 6], [1, 3, 6]); // [2, 4, 5]
```

```js
firstRemove([1, 2, 3, 4, 5]); // [2, 3, 4]
firstRemove([{a: 1}, {b: 1}, {c: 1}]); // [{b: 1}, {c, 1}]
firstRemove([true, false, [true, false]]); // [false, [true, false]]
firstRemove({}); // throws
firstRemove(); // throws
firstRemove(null); // throws
firstRemove(undefined); // throws
```

```js
lastRemove([1, 2, 3, 4, 5]); // [1, 2, 3, 4]
lastRemove([{a: 1}, {b: 1}, {c: 1}]); // [{a: 1}, {b, 1}]
lastRemove([true, false, [true, false]]); // [true, false]
lastRemove({}); // throws
lastRemove(); // throws
lastRemove(null); // throws
lastRemove(undefined); // throws
```