import { render } from '@testing-library/react';

import Mynewvitelib3 from './mynewvitelib3';

describe('Mynewvitelib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mynewvitelib3 />);
    expect(baseElement).toBeTruthy();
  });
});
