import React from 'react';
import { render } from '@testing-library/react';
import { ArticleCard as Component } from './ArticleCard';

test('should render with default props', () => {
    render(
        <Component
            heading="Test Heading"
        />
    );
});
