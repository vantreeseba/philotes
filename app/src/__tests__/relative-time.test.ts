import { describe, expect, it } from 'vitest';
import { relativeTime } from '../lib/relative-time';

const DAY = 24 * 60 * 60 * 1000;
const daysAgo = (n: number) => new Date(Date.now() - n * DAY);

describe('relativeTime', () => {
  it('calls today and the future "Today"', () => {
    expect(relativeTime(new Date())).toBe('Today');
    expect(relativeTime(new Date(Date.now() + DAY))).toBe('Today');
  });

  it('names yesterday', () => {
    expect(relativeTime(daysAgo(1))).toBe('Yesterday');
  });

  it('counts days up to a week', () => {
    expect(relativeTime(daysAgo(3))).toBe('3 days ago');
    expect(relativeTime(daysAgo(6))).toBe('6 days ago');
  });

  it('switches to weeks, months and years', () => {
    expect(relativeTime(daysAgo(7))).toBe('1 week ago');
    expect(relativeTime(daysAgo(21))).toBe('3 weeks ago');
    expect(relativeTime(daysAgo(30))).toBe('1 month ago');
    expect(relativeTime(daysAgo(200))).toBe('6 months ago');
    expect(relativeTime(daysAgo(365))).toBe('1 year ago');
    expect(relativeTime(daysAgo(800))).toBe('2 years ago');
  });
});
