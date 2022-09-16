import { describe, expect, it, vi } from 'vitest';
import { render, screen, userEvent } from '../../util/test-utils';
import { FilterablePhotoList } from './FilterablePhotoList';

describe('FilterablePhotoList test', () => {
  it('search title is visible', () => {
    render(<FilterablePhotoList photos={[]} handleDeletePhoto={() => null} />);
    expect(screen.getByText(/Filter images by name:/i)).toBeDefined();
  });

  it('search bar is rendered', () => {
    render(<FilterablePhotoList photos={[]} handleDeletePhoto={() => null} />);
    expect(screen.getByTestId('query-input')).toBeDefined();
  });

  it('search query filters list', async () => {
    // eslint-disable-next-line no-sparse-arrays
    const mockList: File[] = [
      new File([':°)'], 'File1.png', { type: 'image/png' }),
      new File([':^)'], 'File2.png', { type: 'image/png' }),
    ] as File[];
    vi.spyOn(URL, 'createObjectURL').mockImplementation(() => 'lolol');

    render(<FilterablePhotoList photos={mockList} handleDeletePhoto={() => null} />);

    expect(screen.getByText(/File1.png/i)).toBeDefined();
    expect(screen.getByText(/File2.png/i)).toBeDefined();
    const input = screen.getByTestId('query-input');
    await userEvent.type(input, 'File1');
    expect(screen.getByText(/File1.png/i)).toBeDefined();
    expect(screen.queryByText(/File2.png/i)).toBeNull();
  });
});