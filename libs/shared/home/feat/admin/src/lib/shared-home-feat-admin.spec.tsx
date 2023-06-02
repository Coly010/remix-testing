import { render } from '@testing-library/react';

import SharedHomeFeatAdmin from './shared-home-feat-admin';

describe('SharedHomeFeatAdmin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedHomeFeatAdmin />);
    expect(baseElement).toBeTruthy();
  });
});
