import React from 'react';
import { render } from '@testing-library/react';
import { Button as Component } from './Button';

test('should render with default props', () => {
    render(
        <Component
            label="Test Label"
        />
    );
});
