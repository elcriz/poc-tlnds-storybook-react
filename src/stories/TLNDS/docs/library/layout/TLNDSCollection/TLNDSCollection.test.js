import React from 'react';
import { render } from '@testing-library/react';
import { TLNDSCollection as Component } from './TLNDSCollection';

test('should render with default props', () => {
    render(
        <Component>
            <div>Test Child</div>
        </Component>
    );
});
