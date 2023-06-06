import { render } from '@testing-library/react';

import SharedHomeFeatExternal from './shared-home-feat-external';

describe('SharedHomeFeatExternal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedHomeFeatExternal />);
    expect(baseElement).toBeTruthy();
  });
});
