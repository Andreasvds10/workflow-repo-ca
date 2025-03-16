/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach } from 'vitest';
// Adjust this import to match where your getUsername function is actually exported
import { getUsername } from '../../js/utils/storage.js';

describe('getUsername', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('returns the name from the user object in storage', () => {
    localStorage.setItem('user', JSON.stringify({ name: 'Alice' }));
    expect(getUsername()).toBe('Alice');
  });

  it('returns null when no user exists in storage', () => {
    expect(getUsername()).toBeNull();
  });
});
