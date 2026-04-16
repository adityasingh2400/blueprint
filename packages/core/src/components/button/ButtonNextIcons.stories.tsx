/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { storybookLayoutDecorator, StoryLabel } from "@storybook-common";

import { Download, Home, Refresh, Star } from "@blueprintjs/icons";
import { DownloadIcon, HomeIcon, RefreshIcon, StarIcon } from "@blueprintjs/icons/next";

import { ButtonVariant, Intent, Size } from "../../common";
import { IconNext } from "../icon-next/iconNext";

import { Button } from "./buttons";

const meta: Meta<typeof Button> = {
    title: "Next Icons/Button",
    component: Button,
    decorators: [storybookLayoutDecorator],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Side-by-side comparison of the three icon APIs used with a Button:
 * dynamic string, current static component, and new next static component.
 */
export const IconComparison: Story = {
    name: "Icon API Comparison",
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
                <StoryLabel title="Dynamic string icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    <Button icon="home" text="Home" />
                    <Button icon="download" endIcon="arrow-right" text="Download" />
                    <Button icon="star" text={undefined} aria-label="star" />
                </div>
            </div>
            <div>
                <StoryLabel title="Current static icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    <Button icon={<Home />} text="Home" />
                    <Button icon={<Download />} endIcon="arrow-right" text="Download" />
                    <Button icon={<Star />} text={undefined} aria-label="star" />
                </div>
            </div>
            <div>
                <StoryLabel title="Next static icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    <Button icon={<HomeIcon />} text="Home" />
                    <Button icon={<DownloadIcon />} endIcon={<RefreshIcon />} text="Download" />
                    <Button icon={<StarIcon />} text={undefined} aria-label="star" />
                </div>
            </div>
            <div>
                <StoryLabel title="Dynamic next icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    <Button icon={<IconNext icon="home" />} text="Home" />
                    <Button icon={<IconNext icon="download" />} endIcon={<IconNext icon="refresh" />} text="Download" />
                    <Button icon={<IconNext icon="star" />} text={undefined} aria-label="star" />
                </div>
            </div>
        </div>
    ),
};

/**
 * Next icons across all intents for the default (solid) variant.
 */
export const IntentComparison: Story = {
    name: "Intents",
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
                <StoryLabel title="Dynamic string icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    {Object.values(Intent).map(intent => (
                        <Button key={intent} icon="download" intent={intent} text={intent || "none"} />
                    ))}
                </div>
            </div>
            <div>
                <StoryLabel title="Current static icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    {Object.values(Intent).map(intent => (
                        <Button key={intent} icon={<Download />} intent={intent} text={intent || "none"} />
                    ))}
                </div>
            </div>
            <div>
                <StoryLabel title="Next static icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    {Object.values(Intent).map(intent => (
                        <Button key={intent} icon={<DownloadIcon />} intent={intent} text={intent || "none"} />
                    ))}
                </div>
            </div>
            <div>
                <StoryLabel title="Dynamic next icon" />
                <div style={{ display: "flex", gap: 8 }}>
                    {Object.values(Intent).map(intent => (
                        <Button
                            key={intent}
                            icon={<IconNext icon="download" />}
                            intent={intent}
                            text={intent || "none"}
                        />
                    ))}
                </div>
            </div>
        </div>
    ),
};

/**
 * Next icons across all button variants: solid, minimal, outlined.
 */
export const VariantComparison: Story = {
    name: "Variants",
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {Object.values(ButtonVariant).map(variant => (
                <div key={variant}>
                    <StoryLabel title={variant} />
                    <div style={{ display: "flex", gap: 24 }}>
                        <div style={{ display: "flex", gap: 8 }}>
                            <Button variant={variant} icon="home" text="String" />
                            <Button variant={variant} icon={<Home />} text="Static" />
                            <Button variant={variant} icon={<HomeIcon />} text="Next" />
                            <Button variant={variant} icon={<IconNext icon="home" />} text="Dynamic" />
                        </div>
                        <div style={{ display: "flex", gap: 8 }}>
                            <Button
                                variant={variant}
                                icon="home"
                                endIcon="star"
                                text="String"
                                intent={Intent.PRIMARY}
                            />
                            <Button
                                variant={variant}
                                icon={<Home />}
                                endIcon={<Star />}
                                text="Static"
                                intent={Intent.PRIMARY}
                            />
                            <Button
                                variant={variant}
                                icon={<HomeIcon />}
                                endIcon={<StarIcon />}
                                text="Next"
                                intent={Intent.PRIMARY}
                            />
                            <Button
                                variant={variant}
                                icon={<IconNext icon="home" />}
                                endIcon={<IconNext icon="star" />}
                                text="Dynamic"
                                intent={Intent.PRIMARY}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    ),
};

/**
 * Next icons across all button sizes.
 */
export const SizeComparison: Story = {
    name: "Sizes",
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {Object.values(Size).map(size => (
                <div key={size}>
                    <StoryLabel title={size} />
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <Button size={size} icon="refresh" text="String" />
                        <Button size={size} icon={<Refresh />} text="Static" />
                        <Button size={size} icon={<RefreshIcon />} text="Next" />
                        <Button size={size} icon={<IconNext icon="refresh" />} text="Dynamic" />
                    </div>
                </div>
            ))}
        </div>
    ),
};

/**
 * Next icons with icon + endIcon, and icon-only buttons.
 */
export const IconPositions: Story = {
    name: "Icon Positions",
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
                <StoryLabel title="icon only (string)" />
                <div style={{ display: "flex", gap: 8 }}>
                    <Button icon="home" text="Home" />
                    <Button endIcon="star" text="Star" />
                    <Button icon="home" endIcon="star" text="Both" />
                    <Button icon="home" text={undefined} aria-label="home" />
                </div>
            </div>
            <div>
                <StoryLabel title="icon only (current static)" />
                <div style={{ display: "flex", gap: 8 }}>
                    <Button icon={<Home />} text="Home" />
                    <Button endIcon={<Star />} text="Star" />
                    <Button icon={<Home />} endIcon={<Star />} text="Both" />
                    <Button icon={<Home />} text={undefined} aria-label="home" />
                </div>
            </div>
            <div>
                <StoryLabel title="icon only (next static)" />
                <div style={{ display: "flex", gap: 8 }}>
                    <Button icon={<HomeIcon />} text="Home" />
                    <Button endIcon={<StarIcon />} text="Star" />
                    <Button icon={<HomeIcon />} endIcon={<StarIcon />} text="Both" />
                    <Button icon={<HomeIcon />} text={undefined} aria-label="home" />
                </div>
            </div>
            <div>
                <StoryLabel title="icon only (dynamic next)" />
                <div style={{ display: "flex", gap: 8 }}>
                    <Button icon={<IconNext icon="home" />} text="Home" />
                    <Button endIcon={<IconNext icon="star" />} text="Star" />
                    <Button icon={<IconNext icon="home" />} endIcon={<IconNext icon="star" />} text="Both" />
                    <Button icon={<IconNext icon="home" />} text={undefined} aria-label="home" />
                </div>
            </div>
        </div>
    ),
};

/**
 * Next icons in disabled and loading states.
 */
export const StateComparison: Story = {
    name: "States",
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
                <StoryLabel title="Default" />
                <div style={{ display: "flex", gap: 8 }}>
                    <Button icon="download" text="String" />
                    <Button icon={<Download />} text="Static" />
                    <Button icon={<DownloadIcon />} text="Next" />
                    <Button icon={<IconNext icon="download" />} text="Dynamic" />
                </div>
            </div>
            <div>
                <StoryLabel title="Active" />
                <div style={{ display: "flex", gap: 8 }}>
                    <Button icon="download" text="String" active={true} />
                    <Button icon={<Download />} text="Static" active={true} />
                    <Button icon={<DownloadIcon />} text="Next" active={true} />
                    <Button icon={<IconNext icon="download" />} text="Dynamic" active={true} />
                </div>
            </div>
            <div>
                <StoryLabel title="Disabled" />
                <div style={{ display: "flex", gap: 8 }}>
                    <Button icon="download" text="String" disabled={true} />
                    <Button icon={<Download />} text="Static" disabled={true} />
                    <Button icon={<DownloadIcon />} text="Next" disabled={true} />
                    <Button icon={<IconNext icon="download" />} text="Dynamic" disabled={true} />
                </div>
            </div>
            <div>
                <StoryLabel title="Loading" />
                <div style={{ display: "flex", gap: 8 }}>
                    <Button icon="download" text="String" loading={true} />
                    <Button icon={<Download />} text="Static" loading={true} />
                    <Button icon={<DownloadIcon />} text="Next" loading={true} />
                    <Button icon={<IconNext icon="download" />} text="Dynamic" loading={true} />
                </div>
            </div>
        </div>
    ),
};
