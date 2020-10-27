import React from 'react';
import { render } from '@testing-library/react';
import { Collection as Component } from './Collection';

test('should render with default props', () => {
    render(
        <Component>
            <div>Test Child</div>
        </Component>
    );
});
