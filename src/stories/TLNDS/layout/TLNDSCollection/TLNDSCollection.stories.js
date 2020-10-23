import React from 'react';
import { TLNDSCollection as Collection } from './TLNDSCollection';
import TLNDSCollectionItem from './TLNDSCollectionItem';
import TLNDSAppCard from '../../components/TLNDSAppCard/TLNDSAppCard';

export default {
    title: 'Layout/Collection',
    component: Collection,
    argTypes: {
        children: {
            control: 'node'
        }
    }
};

const Template = args => (
    <Collection {...args} />
);

export const OneFourth = Template.bind({});
OneFourth.args = {
    variant: 'oneFourth',
    children: [(
        <TLNDSAppCard
            heading="An educational app"
            iconImageUrl="/img/icon-app-card-example-001.png"
            information="Noordhoff Uitgevers B.V."
            ratingValue={3}
        />
    ), (
        <TLNDSAppCard
            heading="An educational app"
            iconImageUrl="/img/icon-app-card-example-001.png"
            information="Noordhoff Uitgevers B.V."
            ratingValue={3}
        />
    ), (
        <TLNDSAppCard
            heading="An educational app"
            iconImageUrl="/img/icon-app-card-example-001.png"
            information="Noordhoff Uitgevers B.V."
            ratingValue={3}
        />
    ), (
        <TLNDSAppCard
            heading="An educational app"
            iconImageUrl="/img/icon-app-card-example-001.png"
            information="Noordhoff Uitgevers B.V."
            ratingValue={3}
        />
    )],
};

export const OneThird = Template.bind({});
OneThird.args = {
    variant: 'oneThird',
    children: [(
        <TLNDSAppCard
            heading="An educational app"
            iconImageUrl="/img/icon-app-card-example-001.png"
            information="Noordhoff Uitgevers B.V."
            ratingValue={3}
        />
    ), (
        <TLNDSAppCard
            heading="An educational app"
            iconImageUrl="/img/icon-app-card-example-001.png"
            information="Noordhoff Uitgevers B.V."
            ratingValue={3}
        />
    ), (
        <TLNDSAppCard
            heading="An educational app"
            iconImageUrl="/img/icon-app-card-example-001.png"
            information="Noordhoff Uitgevers B.V."
            ratingValue={3}
        />
    )],
};

export const OneHalf = Template.bind({});
OneHalf.args = {
    variant: 'oneHalf',
    children: [(
        <TLNDSAppCard
            heading="An educational app"
            iconImageUrl="/img/icon-app-card-example-001.png"
            information="Noordhoff Uitgevers B.V."
            ratingValue={3}
        />
    ), (
        <TLNDSAppCard
            heading="An educational app"
            iconImageUrl="/img/icon-app-card-example-001.png"
            information="Noordhoff Uitgevers B.V."
            ratingValue={3}
        />
    )],
};