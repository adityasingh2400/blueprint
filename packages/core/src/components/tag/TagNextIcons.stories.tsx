/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { storybookLayoutDecorator, StoryLabel } from "@storybook-common";

import { Bookmark, Flag, Home, Map, Star } from "@blueprintjs/icons";
import { BookmarkIcon, FlagIcon, HomeIcon, MapIcon, StarIcon } from "@blueprintjs/icons/next";

import { Intent } from "../../common";
import { IconNext } from "../icon-next/iconNext";

import { Tag } from "./tag";

const meta: Meta<typeof Tag> = {
    title: "Next Icons/Tag",
    component: Tag,
    decorators: [storybookLayoutDecorator],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

const noop = () => {
    /* noop */
};

export const IconComparison: Story = {
    name: "Icon API Comparison",
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
                <StoryLabel title="Dynamic string icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    <Tag icon="home" endIcon="map">
                        Location
                    </Tag>
                    <Tag icon="star" onRemove={noop}>
                        Favorite
                    </Tag>
                    <Tag icon="flag">Flagged</Tag>
                </div>
            </div>
            <div>
                <StoryLabel title="Current static icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    <Tag icon={<Home />} endIcon={<Map />}>
                        Location
                    </Tag>
                    <Tag icon={<Star />} onRemove={noop}>
                        Favorite
                    </Tag>
                    <Tag icon={<Flag />}>Flagged</Tag>
                </div>
            </div>
            <div>
                <StoryLabel title="Next static icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    <Tag icon={<HomeIcon />} endIcon={<MapIcon />}>
                        Location
                    </Tag>
                    <Tag icon={<StarIcon />} onRemove={noop}>
                        Favorite
                    </Tag>
                    <Tag icon={<FlagIcon />}>Flagged</Tag>
                </div>
            </div>
            <div>
                <StoryLabel title="Dynamic next icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    <Tag icon={<IconNext icon="home" />} endIcon={<IconNext icon="map" />}>
                        Location
                    </Tag>
                    <Tag icon={<IconNext icon="star" />} onRemove={noop}>
                        Favorite
                    </Tag>
                    <Tag icon={<IconNext icon="flag" />}>Flagged</Tag>
                </div>
            </div>
        </div>
    ),
};

export const IntentComparison: Story = {
    name: "Intents",
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
                <StoryLabel title="Dynamic string icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    {Object.values(Intent).map(intent => (
                        <Tag key={intent} icon="bookmark" intent={intent} onRemove={noop}>
                            {intent || "none"}
                        </Tag>
                    ))}
                </div>
            </div>
            <div>
                <StoryLabel title="Current static icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    {Object.values(Intent).map(intent => (
                        <Tag key={intent} icon={<Bookmark />} intent={intent} onRemove={noop}>
                            {intent || "none"}
                        </Tag>
                    ))}
                </div>
            </div>
            <div>
                <StoryLabel title="Next static icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    {Object.values(Intent).map(intent => (
                        <Tag key={intent} icon={<BookmarkIcon />} intent={intent} onRemove={noop}>
                            {intent || "none"}
                        </Tag>
                    ))}
                </div>
            </div>
            <div>
                <StoryLabel title="Dynamic next icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    {Object.values(Intent).map(intent => (
                        <Tag key={intent} icon={<IconNext icon="bookmark" />} intent={intent} onRemove={noop}>
                            {intent || "none"}
                        </Tag>
                    ))}
                </div>
            </div>
        </div>
    ),
};

export const SizeComparison: Story = {
    name: "Sizes",
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
                <StoryLabel title="Medium (default)" />
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <Tag icon="home" endIcon="map">
                        String
                    </Tag>
                    <Tag icon={<Home />} endIcon={<Map />}>
                        Static
                    </Tag>
                    <Tag icon={<HomeIcon />} endIcon={<MapIcon />}>
                        Next
                    </Tag>
                    <Tag icon={<IconNext icon="home" />} endIcon={<IconNext icon="map" />}>
                        Dynamic
                    </Tag>
                </div>
            </div>
            <div>
                <StoryLabel title="Large" />
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <Tag icon="home" endIcon="map" size="large">
                        String
                    </Tag>
                    <Tag icon={<Home />} endIcon={<Map />} size="large">
                        Static
                    </Tag>
                    <Tag icon={<HomeIcon />} endIcon={<MapIcon />} size="large">
                        Next
                    </Tag>
                    <Tag icon={<IconNext icon="home" />} endIcon={<IconNext icon="map" />} size="large">
                        Dynamic
                    </Tag>
                </div>
            </div>
        </div>
    ),
};

export const MinimalComparison: Story = {
    name: "Minimal",
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
                <StoryLabel title="Dynamic string icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    {Object.values(Intent).map(intent => (
                        <Tag key={intent} icon="flag" intent={intent} minimal={true}>
                            {intent || "none"}
                        </Tag>
                    ))}
                </div>
            </div>
            <div>
                <StoryLabel title="Current static icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    {Object.values(Intent).map(intent => (
                        <Tag key={intent} icon={<Flag />} intent={intent} minimal={true}>
                            {intent || "none"}
                        </Tag>
                    ))}
                </div>
            </div>
            <div>
                <StoryLabel title="Next static icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    {Object.values(Intent).map(intent => (
                        <Tag key={intent} icon={<FlagIcon />} intent={intent} minimal={true}>
                            {intent || "none"}
                        </Tag>
                    ))}
                </div>
            </div>
            <div>
                <StoryLabel title="Dynamic next icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    {Object.values(Intent).map(intent => (
                        <Tag key={intent} icon={<IconNext icon="flag" />} intent={intent} minimal={true}>
                            {intent || "none"}
                        </Tag>
                    ))}
                </div>
            </div>
        </div>
    ),
};
