import { tweened } from 'svelte/motion'
import { cubicOut as easing } from 'svelte/easing'
import { get } from 'svelte/store'

// eslint-disable-next-line no-unused-vars
type Setter = (prev: number) => number

export default () => {
  const { subscribe, set } = tweened(
    {
      x: 0,
      y: 0,
      scale: 1.2,
      rotate: 0,
      flip: {
        x: 0,
        y: 0,
      },
    },
    {
      duration: 300,
      easing,
    }
  )

  return {
    subscribe,
    set,
    x(fn: Setter) {
      const store = get(this)
      this.set({ ...store, x: fn(store.x) })
    },
    y(fn: Setter) {
      const store = get(this)
      this.set({ ...store, y: fn(store.y) })
    },
    scale(fn: Setter) {
      const store = get(this)
      this.set({ ...store, scale: fn(store.scale) })
    },
    rotate(fn: Setter) {
      const store = get(this)
      this.set({ ...store, rotate: fn(store.rotate) })
    },
    flipX(fn: Setter) {
      const store = get(this)
      this.set({ ...store, flip: { x: fn(store.flip.x), y: store.flip.y } })
    },
    flipY(fn: Setter) {
      const store = get(this)
      this.set({ ...store, flip: { x: store.flip.x, y: fn(store.flip.y) } })
    },
    width: 0,
    height: 0,
  }
}
