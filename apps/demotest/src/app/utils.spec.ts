import {isEven} from "./utils";


describe('utils', () => {
  it('should be true when even', () => {
    expect(isEven(2)).toBeTruthy();
  })
  it('should be false when odd', () => {
    expect(isEven(1)).toBeFalsy();
  })
})
