import { render } from '@testing-library/react';

import SharedHomeFeatCustomer from './shared-home-feat-customer';

describe('SharedHomeFeatCustomer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedHomeFeatCustomer />);
    expect(baseElement).toBeTruthy();
  });
});
