import React from 'react';
import { TLNDSRating as Rating } from './TLNDSRating';

export default {
    title: 'Components/Rating',
    component: Rating,
    argTypes: {
        value: {
            control: {
                type: 'number',
            }
        },
    },
};

const Template = args => (
    <Rating {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Score1 = Template.bind({});
Score1.args = {
    value: 1,
};

export const Score2 = Template.bind({});
Score2.args = {
    value: 2,
};

export const Score3 = Template.bind({});
Score3.args = {
    value: 3,
};

export const Score4 = Template.bind({});
Score4.args = {
    value: 4,
};

export const Score5 = Template.bind({});
Score5.args = {
    value: 5,
};