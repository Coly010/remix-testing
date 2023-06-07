import { render } from '@testing-library/react';

import NxCloudUiPrimitives from './nx-cloud-ui-primitives';

describe('NxCloudUiPrimitives', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NxCloudUiPrimitives />);
    expect(baseElement).toBeTruthy();
  });
});
