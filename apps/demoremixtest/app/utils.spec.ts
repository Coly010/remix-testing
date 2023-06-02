import { isEven } from './utils';

describe('utils', () => {
  it('should be true', () => {
    expect(isEven(2)).toBe(true)
  })

  it('should be false', () => {
    expect(isEven(1)).toBe(false)
  })
})
