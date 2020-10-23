import React from 'react';
import { TLNDSAppCard as AppCard } from './TLNDSAppCard';

export default {
    title: 'Components/AppCard',
    component: AppCard,
    argTypes: {
        ratingValue: {
            control: {
                type: 'number',
            }
        },
    },
};

const Template = args => (
    <AppCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
    heading: 'An educational app',
    information: 'Noordhoff Uitgevers B.V.',
    ratingValue: 3,
};

export const WithImage = Template.bind({});
WithImage.args = {
    heading: 'An educational app',
    information: 'Noordhoff Uitgevers B.V.',
    ratingValue: 3,
    iconImageUrl: '/img/icon-app-card-example-001.png',
};