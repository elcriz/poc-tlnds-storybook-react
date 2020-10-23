import React from 'react';
import { render } from '@testing-library/react';
import { TLNDSRating as Component } from './TLNDSRating';

test('should render with default props', () => {
    render(
        <Component />
    );
});