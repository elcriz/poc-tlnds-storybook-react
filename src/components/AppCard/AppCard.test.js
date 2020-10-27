import React from 'react';
import { render } from '@testing-library/react';
import { AppCard as Component } from './AppCard';

test('should render with default props', () => {
    render(
        <Component
            heading="Test Heading"
        />
    );
});
