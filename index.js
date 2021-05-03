import { tweened } from 'svelte/motion'
import { get } from 'svelte/store'

export function animation(initial, options={}) {
  const speed = options.speed || 1
  const duration = options.duration || 300
  const adjustedOptions = {...options, duration: duration / speed, speed}
  const store = tweened(initial, adjustedOptions)
  const set = store.set

  store.lastSet = initial
  store.lastSpeed = speed

  store.pause = () => {
    const value = get(store)
    return set(value, {duration: 0})
  }

  store.reset = () => {
    return set(initial, {duration: 0})
  }

  store.continue = () => {
    const value = get(store)
    const percentageCompleted = (store.lastSet - initial) == 0 ? 1 : (value - initial) / (store.lastSet - initial)
    const remaining = (options.duration - (options.duration * percentageCompleted))

    return set(store.lastSet, {duration: remaining / adjustedOptions.speed})
  }

  store.replay = async () => {
    await store.reset()
    return set(store.lastSet, adjustedOptions)
  }

  store.reverse = async () => {
    const value = get(store)
    const percentageCompleted = (store.lastSet - initial) == 0 ? 1 : (value - initial) / (store.lastSet - initial)
    const completed = options.duration * percentageCompleted / store.lastSpeed

    set(value, {duration: 0})

    return set(initial, {duration: completed})
  }

  store.set = (newValue, options) => {
    store.lastSet = newValue
    return set(newValue, adjustedOptions)
  }

  store.speed = (newSpeed) => {
    adjustedOptions.speed = newSpeed
    adjustedOptions.duration = duration / newSpeed

    const promise = store.continue()

    store.lastSpeed = newSpeed

    return promise
  }

  return store
}
