import { VirtuosoStore } from '../src/VirtuosoStore'
import { skip, take } from 'rxjs/operators'

describe('Virtuoso Store', () => {
  it('calculates the total height of the list', done => {
    const { totalHeight$, itemHeights$ } = VirtuosoStore({ overscan: 0, totalCount: 100 })

    totalHeight$.pipe(take(1)).subscribe(val => {
      expect(val).toBe(0)
    })

    totalHeight$.pipe(skip(1)).subscribe(val => {
      expect(val).toBe(5000)
      done()
    })

    itemHeights$.next([{ start: 0, end: 0, size: 50 }])
  })

  it('leaves space for the footer', done => {
    const { totalHeight$, footerHeight$, itemHeights$ } = VirtuosoStore({ overscan: 0, totalCount: 100 })

    totalHeight$.pipe(skip(2)).subscribe(val => {
      expect(val).toBe(5050)
      done()
    })

    itemHeights$.next([{ start: 0, end: 0, size: 50 }])
    footerHeight$.next(50)
  })

  it('recalculates total when item height changes', done => {
    const { totalHeight$, itemHeights$ } = VirtuosoStore({ overscan: 0, totalCount: 100 })

    totalHeight$.pipe(skip(2)).subscribe(val => {
      expect(val).toBe(4980)
      done()
    })

    itemHeights$.next([{ start: 0, end: 0, size: 50 }])
    itemHeights$.next([{ start: 0, end: 0, size: 30 }])
  })

  it('emits a single item when the size is unknown', done => {
    const { viewportHeight$, list$ } = VirtuosoStore({ overscan: 0, totalCount: 100 })

    list$.pipe().subscribe(items => {
      expect(items).toHaveLength(1)
      done()
    })

    viewportHeight$.next(230)
  })

  it('fills in the space with enough items', done => {
    const { itemHeights$, viewportHeight$, list$ } = VirtuosoStore({ overscan: 0, totalCount: 100 })

    list$.pipe().subscribe(items => {
      expect(items).toHaveLength(5)
      done()
    })

    viewportHeight$.next(230)
    itemHeights$.next([{ start: 0, end: 0, size: 50 }])
  })

  it('provides exact items for a given size', done => {
    const { itemHeights$, viewportHeight$, list$ } = VirtuosoStore({ overscan: 0, totalCount: 100 })

    viewportHeight$.next(250)

    list$.pipe().subscribe(items => {
      expect(items).toHaveLength(5)
      done()
    })

    itemHeights$.next([{ start: 0, end: 0, size: 50 }])
  })

  it('moves to the correct window', done => {
    const { itemHeights$, viewportHeight$, list$, scrollTop$ } = VirtuosoStore({ overscan: 0, totalCount: 100 })

    viewportHeight$.next(250)
    scrollTop$.next(120)

    list$.pipe().subscribe(items => {
      expect(items[0].index).toEqual(2)
      expect(items).toHaveLength(6)
      done()
    })

    itemHeights$.next([{ start: 0, end: 0, size: 50 }])
  })

  it('fills in the overscan', done => {
    const { itemHeights$, viewportHeight$, list$, scrollTop$ } = VirtuosoStore({ overscan: 25, totalCount: 100 })

    viewportHeight$.next(250)
    scrollTop$.next(120)

    list$.pipe().subscribe(items => {
      expect(items[0].index).toEqual(2)
      expect(items).toHaveLength(7)
      done()
    })
    itemHeights$.next([{ start: 0, end: 0, size: 50 }])
  })

  it('skips the fixed items', done => {
    const { topItemCount$, itemHeights$, viewportHeight$, list$ } = VirtuosoStore({ overscan: 0, totalCount: 100 })

    topItemCount$.next(3)
    viewportHeight$.next(250)

    list$.pipe().subscribe(items => {
      expect(items[0].index).toEqual(3)
      expect(items).toHaveLength(2)
      done()
    })
    itemHeights$.next([{ start: 0, end: 0, size: 50 }])
  })

  it('picks the sticky items', done => {
    const { topList$, stickyItems$, itemHeights$, viewportHeight$, list$ } = VirtuosoStore({
      overscan: 0,
      totalCount: 100,
    })

    stickyItems$.next([0, 10, 100])
    viewportHeight$.next(250)
    itemHeights$.next([{ start: 0, end: 0, size: 50 }])

    topList$.subscribe(topItems => {
      expect(topItems).toHaveLength(1)
      expect(topItems[0]).toEqual({ index: 0, size: 50, offset: NaN })
    })

    list$.pipe().subscribe(items => {
      expect(items[0].index).toEqual(1)
      expect(items).toHaveLength(4)
      done()
    })
  })

  it('selects the closest sticky item', done => {
    const { topList$, stickyItems$, scrollTop$, itemHeights$, viewportHeight$ } = VirtuosoStore({
      overscan: 0,
      totalCount: 100,
    })

    stickyItems$.next([0, 10, 100])
    viewportHeight$.next(250)
    itemHeights$.next([{ start: 0, end: 0, size: 50 }])
    scrollTop$.next(2000) // should scroll past the first item, into the second

    topList$.subscribe(topItems => {
      expect(topItems).toHaveLength(1)
      expect(topItems[0]).toEqual({ index: 10, size: 50, offset: NaN })
      done()
    })
  })
})
