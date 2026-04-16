/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { storybookLayoutDecorator, StoryLabel } from "@storybook-common";

import { Flag } from "@blueprintjs/icons";
import { FlagIcon } from "@blueprintjs/icons/next";

import { IconNext } from "../icon-next/iconNext";

import { TagInput } from "./tagInput";

const meta: Meta<typeof TagInput> = {
    title: "Next Icons/TagInput",
    component: TagInput,
    decorators: [storybookLayoutDecorator],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof TagInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconComparison: Story = {
    name: "Icon API Comparison",
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 350 }}>
            <div>
                <StoryLabel title="Dynamic string icon" />
                <TagInput leftIcon="flag" placeholder="Add tags..." values={["Important", "Review"]} />
            </div>
            <div>
                <StoryLabel title="Current static icon" />
                <TagInput leftIcon={<Flag />} placeholder="Add tags..." values={["Important", "Review"]} />
            </div>
            <div>
                <StoryLabel title="Next static icon" />
                <TagInput leftIcon={<FlagIcon />} placeholder="Add tags..." values={["Important", "Review"]} />
            </div>
            <div>
                <StoryLabel title="Dynamic next icon" />
                <TagInput
                    leftIcon={<IconNext icon="flag" />}
                    placeholder="Add tags..."
                    values={["Important", "Review"]}
                />
            </div>
        </div>
    ),
};

export const SizeComparison: Story = {
    name: "Sizes",
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 400 }}>
            <div>
                <StoryLabel title="Medium (default) — string" />
                <TagInput leftIcon="flag" placeholder="Add tags..." values={["Tag"]} />
            </div>
            <div>
                <StoryLabel title="Medium (default) — next static" />
                <TagInput leftIcon={<FlagIcon />} placeholder="Add tags..." values={["Tag"]} />
            </div>
            <div>
                <StoryLabel title="Medium (default) — dynamic next" />
                <TagInput leftIcon={<IconNext icon="flag" />} placeholder="Add tags..." values={["Tag"]} />
            </div>
            <div>
                <StoryLabel title="Large — string" />
                <TagInput leftIcon="flag" placeholder="Add tags..." values={["Tag"]} size="large" />
            </div>
            <div>
                <StoryLabel title="Large — next static (size={20})" />
                <TagInput leftIcon={<FlagIcon size={20} />} placeholder="Add tags..." values={["Tag"]} size="large" />
            </div>
            <div>
                <StoryLabel title="Large — dynamic next (size={20})" />
                <TagInput
                    leftIcon={<IconNext icon="flag" size={20} />}
                    placeholder="Add tags..."
                    values={["Tag"]}
                    size="large"
                />
            </div>
        </div>
    ),
};

export const EmptyState: Story = {
    name: "Empty",
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 350 }}>
            <div>
                <StoryLabel title="Dynamic string icon" />
                <TagInput leftIcon="flag" placeholder="Add tags..." values={[]} />
            </div>
            <div>
                <StoryLabel title="Next static icon" />
                <TagInput leftIcon={<FlagIcon />} placeholder="Add tags..." values={[]} />
            </div>
            <div>
                <StoryLabel title="Dynamic next icon" />
                <TagInput leftIcon={<IconNext icon="flag" />} placeholder="Add tags..." values={[]} />
            </div>
        </div>
    ),
};
