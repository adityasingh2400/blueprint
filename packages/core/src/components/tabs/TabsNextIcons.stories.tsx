/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { storybookLayoutDecorator, StoryLabel } from "@storybook-common";

import { Cog, Envelope, Home, Star } from "@blueprintjs/icons";
import { CogIcon, EnvelopeIcon, HomeIcon, StarIcon } from "@blueprintjs/icons/next";

import { IconNext } from "../icon-next/iconNext";

import { Tab } from "./tab";
import { Tabs } from "./tabs";

const meta = {
    title: "Next Icons/Tabs",
    decorators: [storybookLayoutDecorator],
    parameters: {
        layout: "centered",
    },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconComparison: Story = {
    name: "Icon API Comparison",
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 500 }}>
            <div>
                <StoryLabel title="Dynamic string icon" />
                <Tabs id="string-tabs" defaultSelectedTabId="home">
                    <Tab id="home" icon="home" title="Home" panel={<p>Home</p>} />
                    <Tab id="star" icon="star" title="Favorites" panel={<p>Favorites</p>} />
                    <Tab id="cog" icon="cog" title="Settings" panel={<p>Settings</p>} />
                    <Tab id="envelope" icon="envelope" title="Messages" panel={<p>Messages</p>} />
                </Tabs>
            </div>
            <div>
                <StoryLabel title="Current static icon" />
                <Tabs id="static-tabs" defaultSelectedTabId="home">
                    <Tab id="home" icon={<Home />} title="Home" panel={<p>Home</p>} />
                    <Tab id="star" icon={<Star />} title="Favorites" panel={<p>Favorites</p>} />
                    <Tab id="cog" icon={<Cog />} title="Settings" panel={<p>Settings</p>} />
                    <Tab id="envelope" icon={<Envelope />} title="Messages" panel={<p>Messages</p>} />
                </Tabs>
            </div>
            <div>
                <StoryLabel title="Next static icon" />
                <Tabs id="next-tabs" defaultSelectedTabId="home">
                    <Tab id="home" icon={<HomeIcon />} title="Home" panel={<p>Home</p>} />
                    <Tab id="star" icon={<StarIcon />} title="Favorites" panel={<p>Favorites</p>} />
                    <Tab id="cog" icon={<CogIcon />} title="Settings" panel={<p>Settings</p>} />
                    <Tab id="envelope" icon={<EnvelopeIcon />} title="Messages" panel={<p>Messages</p>} />
                </Tabs>
            </div>
            <div>
                <StoryLabel title="Dynamic next icon" />
                <Tabs id="dynamic-tabs" defaultSelectedTabId="home">
                    <Tab id="home" icon={<IconNext icon="home" />} title="Home" panel={<p>Home</p>} />
                    <Tab id="star" icon={<IconNext icon="star" />} title="Favorites" panel={<p>Favorites</p>} />
                    <Tab id="cog" icon={<IconNext icon="cog" />} title="Settings" panel={<p>Settings</p>} />
                    <Tab id="envelope" icon={<IconNext icon="envelope" />} title="Messages" panel={<p>Messages</p>} />
                </Tabs>
            </div>
        </div>
    ),
};

export const SizeComparison: Story = {
    name: "Sizes",
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: 32, width: 500 }}>
            <div>
                <StoryLabel title="Medium (default) — string" />
                <Tabs id="medium-string" defaultSelectedTabId="home">
                    <Tab id="home" icon="home" title="Home" panel={<p>Home</p>} />
                    <Tab id="star" icon="star" title="Favorites" panel={<p>Favorites</p>} />
                </Tabs>
            </div>
            <div>
                <StoryLabel title="Medium (default) — next static" />
                <Tabs id="medium-next" defaultSelectedTabId="home">
                    <Tab id="home" icon={<HomeIcon />} title="Home" panel={<p>Home</p>} />
                    <Tab id="star" icon={<StarIcon />} title="Favorites" panel={<p>Favorites</p>} />
                </Tabs>
            </div>
            <div>
                <StoryLabel title="Medium (default) — dynamic next" />
                <Tabs id="medium-dynamic" defaultSelectedTabId="home">
                    <Tab id="home" icon={<IconNext icon="home" />} title="Home" panel={<p>Home</p>} />
                    <Tab id="star" icon={<IconNext icon="star" />} title="Favorites" panel={<p>Favorites</p>} />
                </Tabs>
            </div>
            <div>
                <StoryLabel title="Large — string" />
                <Tabs id="large-string" defaultSelectedTabId="home" size="large">
                    <Tab id="home" icon="home" title="Home" panel={<p>Home</p>} />
                    <Tab id="star" icon="star" title="Favorites" panel={<p>Favorites</p>} />
                </Tabs>
            </div>
            <div>
                <StoryLabel title="Large — next static" />
                <Tabs id="large-next" defaultSelectedTabId="home" size="large">
                    <Tab id="home" icon={<HomeIcon />} title="Home" panel={<p>Home</p>} />
                    <Tab id="star" icon={<StarIcon />} title="Favorites" panel={<p>Favorites</p>} />
                </Tabs>
            </div>
            <div>
                <StoryLabel title="Large — dynamic next" />
                <Tabs id="large-dynamic" defaultSelectedTabId="home" size="large">
                    <Tab id="home" icon={<IconNext icon="home" />} title="Home" panel={<p>Home</p>} />
                    <Tab id="star" icon={<IconNext icon="star" />} title="Favorites" panel={<p>Favorites</p>} />
                </Tabs>
            </div>
        </div>
    ),
};
