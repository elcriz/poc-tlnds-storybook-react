import React from 'react';
import { render } from '@testing-library/react';
import { CollectionItem as Component } from './CollectionItem';

test('should render with default props', () => {
    render(
        <Component>
            <div>Test Child</div>
        </Component>
    );
});
