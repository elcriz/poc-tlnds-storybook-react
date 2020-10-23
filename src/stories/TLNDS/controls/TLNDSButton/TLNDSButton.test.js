import React from 'react';
import { render } from '@testing-library/react';
import { TLNDSButton as Component } from './TLNDSButton';

test('should render with default props', () => {
    render(
        <Component
            label="Test Label"
        />
    );
});
