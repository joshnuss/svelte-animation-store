Svelte Animation Store
---------------

A store that is based on Svelte's [tweened store](https://svelte.dev/docs#tweened), with some additional functionality:

- `pause()`: freeze the store at the current value.
- `reset()`: resets the store's value back to the last set point.
- `continue()`: play on from a paused state.
- `reverse()`: play in reverse.
- `replay()`: go back to start, and play to last set point.
- `accelerate(speed)`: adjust the speed of the animation.

Functionality inherited from `writable()`:

- `set(value)`: works the same as a `writable` store.
- `update(callback)`: works the same as a `writable` store.
- `subscribe(callback)`: works the same as a `writable` store.

## [Demo](https://svelte.dev/repl/9751df15d22245f691a1cf3a30c3b7b4?version=3.35.0)

## License

MIT
