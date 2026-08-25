import { describe, it, expect } from 'vitest'
import { add, daysUntil } from '../src/math.js'

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5)
  })

  it('adds negative numbers', () => {
    expect(add(-2, -3)).toBe(-5)
  })
})

describe('daysUntil', () => {
  it('returns 0 when the target date is today', () => {
    const now = new Date('2026-08-25T00:00:00Z')
    expect(daysUntil(now, now)).toBe(0)
  })

  it('returns a positive number of days for a future date', () => {
    const from = new Date('2026-08-25T00:00:00Z')
    const target = new Date('2026-08-30T00:00:00Z')
    expect(daysUntil(target, from)).toBe(5)
  })
})
