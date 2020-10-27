import React from 'react';
import { render } from '@testing-library/react';
import { Rating as Component } from './Rating';

test('should render with default props', () => {
    render(
        <Component />
    );
});
