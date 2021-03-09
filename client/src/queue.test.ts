import Queue from './queue'

describe('Queue', () => {
  it('should be empty after construction with length as parameter', () => {
    const queue = new Queue(10)
    expect(queue.length).toBe(0)
  })

  it('should contain the elements of an iterable if constructed from one', () => {
    const queue = new Queue([1, 2, 3, 4, 5])
    expect(queue.array()).toEqual([1, 2, 3, 4, 5])
  })

  const queue = new Queue<number>(10)
  it('should not remove elements if capacity not yet filled', () => {
    queue.push(1, 2, 3, 4, 5)
    expect(queue.array()).toEqual([1, 2, 3, 4, 5])
  })

  it('should remove elements from the beginning if capacity is filled', () => {
    queue.push(6, 7, 8, 9, 10, 11)
    expect(queue.array()).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
  })

  it(`should always remove enough elements so that its length is equal to its capacity`, () => {
    queue.push(12, 13, 14)
    expect(queue.array()).toEqual([5, 6, 7, 8, 9, 10, 11, 12, 13, 14])

    queue.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)
    expect(queue.array()).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
  })

  it('should return a well-formed iterator', () => {
    expect([...queue]).toEqual(queue.array())
  })

  it('should return the removed elements', () => {
    expect(queue.push(12, 13, 14)).toEqual([2, 3, 4])
  })
})
