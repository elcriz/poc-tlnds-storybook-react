import React from 'react';
import { render } from '@testing-library/react';
import { TLNDSAppCard as Component } from './TLNDSAppCard';

test('should render with default props', () => {
    render(
        <Component
            heading="Test Heading"
        />
    );
});