import React from 'react';
import { render } from '@testing-library/react';
import { Dialog as Component } from './Dialog';

test('should render with default props', () => {
    render(
        <Component>Children</Component>
    );
});
