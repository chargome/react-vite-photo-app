import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '../../util/test-utils';
import { PhotoList } from './PhotoList';

const mockFile1 = new File([':)'], 'File1.png', { type: 'image/png' });
const mockFile2 = new File([':)'], 'File2.png', { type: 'image/png' });

describe('PhotoList test', () => {
  it('file names are visible', () => {
    vi.spyOn(URL, 'createObjectURL').mockImplementation(() => 'lolol');
    render(<PhotoList photos={[mockFile1, mockFile2]} handleDeletePhoto={() => null} />);
    expect(screen.getByText(/File1.png/i)).toBeDefined();
    expect(screen.getByText(/File2.png/i)).toBeDefined();
  });

  it('file sizes are visible', () => {
    vi.spyOn(URL, 'createObjectURL').mockImplementation(() => 'lolol');
    render(<PhotoList photos={[mockFile1, mockFile2]} handleDeletePhoto={() => null} />);
    expect(screen.queryAllByText(/Size: 0 MB/i)).toHaveLength(2);
  });
});