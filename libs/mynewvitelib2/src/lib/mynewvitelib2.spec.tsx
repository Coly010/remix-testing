import { render } from '@testing-library/react';

import Mynewvitelib2 from './mynewvitelib2';

describe('Mynewvitelib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mynewvitelib2 />);
    expect(baseElement).toBeTruthy();
  });
});
