import React from 'react';
import { render } from '@testing-library/react';
import { SectionCard as Component } from './SectionCard';

test('should render with default props', () => {
    render(
        <Component
            heading="Test Heading"
        />
    );
});
