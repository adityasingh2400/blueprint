/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { storybookLayoutDecorator, StoryLabel } from "@storybook-common";

import { Cog } from "@blueprintjs/icons";
import { CogIcon } from "@blueprintjs/icons/next";

import { IconNext } from "../icon-next/iconNext";

import { Section } from "./section";
import { SectionCard } from "./sectionCard";

const meta: Meta<typeof Section> = {
    title: "Next Icons/Section",
    component: Section,
    decorators: [storybookLayoutDecorator],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconComparison: Story = {
    name: "Icon API Comparison",
    render: () => (
        <div style={{ display: "flex", gap: 24, width: 900 }}>
            <div style={{ flex: 1 }}>
                <StoryLabel title="Dynamic string icon" />
                <Section icon="cog" title="Settings">
                    <SectionCard>General settings content.</SectionCard>
                </Section>
            </div>
            <div style={{ flex: 1 }}>
                <StoryLabel title="Current static icon" />
                <Section icon={<Cog />} title="Settings">
                    <SectionCard>General settings content.</SectionCard>
                </Section>
            </div>
            <div style={{ flex: 1 }}>
                <StoryLabel title="Next static icon" />
                <Section icon={<CogIcon />} title="Settings">
                    <SectionCard>General settings content.</SectionCard>
                </Section>
            </div>
            <div style={{ flex: 1 }}>
                <StoryLabel title="Dynamic next icon" />
                <Section icon={<IconNext icon="cog" />} title="Settings">
                    <SectionCard>General settings content.</SectionCard>
                </Section>
            </div>
        </div>
    ),
};
