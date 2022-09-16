import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '../../util/test-utils';
import { PhotoPreview } from './PhotoPreview';

const mockFile = new File([':)'], 'File1.png', { type: 'image/png' });

describe('PhotoPreview test', () => {
  it('file name is visible', () => {
    vi.spyOn(URL, 'createObjectURL').mockImplementation(() => 'lolol');
    render(<PhotoPreview photo={mockFile} handleDelete={() => null} />);
    expect(screen.getByText(/File1.png/i)).toBeDefined();
  });

  it('file size is visible', () => {
    vi.spyOn(URL, 'createObjectURL').mockImplementation(() => 'lolol');
    render(<PhotoPreview photo={mockFile} handleDelete={() => null} />);
    expect(screen.getByText(/Size: 0 MB/i)).toBeDefined();
  });
});