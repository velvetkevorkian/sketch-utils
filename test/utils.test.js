import {hexToHSL} from '@/utils.js'

context('hexToHSL', () => {
  it('white', () => {
    expect(hexToHSL('#ffffff')).to.deep.equal({
      h: 0,
      s: 0,
      l: 100
    })
  })

  it('red', () => {
    expect(hexToHSL('#ff0000')).to.deep.equal({
      h: 0,
      s: 100,
      l: 50
    })
  })

  it('green', () => {
    expect(hexToHSL('#186718')).to.deep.equal({
      h: 120,
      s: 62,
      l: 25
    })
  })

  it('works with different scales', () => {
    expect(hexToHSL('#186718', 100, 50, 50)).to.deep.equal({
      h: 33,
      s: 31,
      l: 12
    })
  })
})