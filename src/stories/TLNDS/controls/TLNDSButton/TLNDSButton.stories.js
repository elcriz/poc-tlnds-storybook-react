import React from 'react';
import { TLNDSButton as Button } from './TLNDSButton';

export default {
    title: 'Controls/Button',
    component: Button
};

const Template = args => (
    <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary button',
    variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary button',
    variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    label: 'Tertiary button',
    variant: 'tertiary',
};

export const Outlined = Template.bind({});
Outlined.args = {
    label: 'Outlined button',
    variant: 'primary',
    isOutlined: true,
};