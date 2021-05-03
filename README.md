Svelte Animation Store
---------------

A store that is based on Svelte's [tweened store](https://svelte.dev/docs#tweened), with some additional functionality:

- `set`: works the same as a `writable` store.
- `subscribe`: works the same as a `writable` store.
- `pause`: freezed the store at the current value.
- `reset`: resets the store's value back to the last set point.
- `continue`: play on from a pause.
- `reverse`: play in reverse.
- `replay`: go back to start, and play to last set point.
- `accelerate`: change speed of animation.

## [Demo](https://svelte.dev/repl/9751df15d22245f691a1cf3a30c3b7b4?version=3.35.0)

## License

MIT
