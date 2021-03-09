// @ts-check
/**
 * A fixed size queue implemented using Javascript's array type.
 *
 * @template T The type stored in the queue.
 */
export default class Queue {
  /**
   * Constructs a fixed size queue.
   *
   * @param {number | Iterable<T> | ArrayLike<T>} initializer
   * The value to use to initialize the underlying array.
   * The buffer's length will be deduced from the constructed
   * array's length.
   */
  constructor(initializer) {
    if (typeof initializer === 'number') {
      /**
       * The internal buffer.
       *
       * @private
       * @type {T[]}
       */
      this.buffer = []
      /**
       * The maximum size of the buffer
       *
       * @private
       */
      this.capacity = initializer
    } else {
      this.buffer = Array.from(initializer)
      this.capacity = this.buffer.length
    }
  }

  /**
   * The queue's occupied size
   *
   * @returns {number}
   */
  get length() {
    return this.buffer.length
  }

  [Symbol.iterator]() {
    return this.buffer[Symbol.iterator]()
  }

  /**
   * Returns the ith element in the buffer.
   *
   * @param {number} i The index of the element to return
   * @returns {T} The value at index i
   */
  at(i) {
    return this.buffer[i]
  }

  /**
   * Pushes the elements of the iterable into the queue.
   *
   * @param {...T} elements The new elements to push
   * @returns {T[]} The elements removed from the queue
   */
  push(...elements) {
    this.buffer.push(...elements)
    if (this.length > this.capacity) {
      return this.buffer.splice(0, this.length - this.capacity)
    }
    return []
  }

  /**
   * Returns a read-only reference to the buffer used for the queue.
   *
   * @returns {readonly T[]} The underlying buffer
   */
  array() {
    return this.buffer
  }
}
