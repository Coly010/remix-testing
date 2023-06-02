import { render } from '@testing-library/react';

import Mynewvitelib from './mynewvitelib';

describe('Mynewvitelib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mynewvitelib />);
    expect(baseElement).toBeTruthy();
  });
});
