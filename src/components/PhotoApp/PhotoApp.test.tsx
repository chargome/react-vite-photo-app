import { describe, expect, it } from 'vitest';
import { PhotoApp } from './PhotoApp';
import { render, screen } from '../../util/test-utils';

describe('Photos app test', () => {
  it('title is visible', () => {
    render(<PhotoApp />);
    expect(screen.getByText(/Photo App/i)).toBeDefined();
  });

  it('title of uploaded photos is visible', () => {
    render(<PhotoApp />);
    expect(screen.getByText(/Uploaded photos:/i)).toBeDefined();
  });

  it('no photos message is visible ', () => {
    render(<PhotoApp />);
    expect(screen.getByText(/No photos added yet/i)).toBeDefined();
  });
});