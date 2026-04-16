/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { storybookLayoutDecorator, StoryLabel } from "@storybook-common";

import { Bookmark, Document, Flash } from "@blueprintjs/icons";
import { BookmarkIcon, DocumentIcon, FlashIcon } from "@blueprintjs/icons/next";

import { IconNext } from "../icon-next/iconNext";

import { EntityTitle } from "./entityTitle";

const meta: Meta<typeof EntityTitle> = {
    title: "Next Icons/EntityTitle",
    component: EntityTitle,
    decorators: [storybookLayoutDecorator],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof EntityTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
    name: "Loading",
    render: () => (
        <div style={{ display: "flex", gap: 48 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <StoryLabel title="Dynamic string icon" />
                <EntityTitle icon="document" title="Annual Report" subtitle="Q4 2025" loading={true} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <StoryLabel title="Current static icon" />
                <EntityTitle icon={<Document />} title="Annual Report" subtitle="Q4 2025" loading={true} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <StoryLabel title="Next static icon" />
                <EntityTitle icon={<DocumentIcon />} title="Annual Report" subtitle="Q4 2025" loading={true} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <StoryLabel title="Dynamic next icon" />
                <EntityTitle
                    icon={<IconNext icon="document" />}
                    title="Annual Report"
                    subtitle="Q4 2025"
                    loading={true}
                />
            </div>
        </div>
    ),
};

export const IconComparison: Story = {
    name: "Icon API Comparison",
    render: () => (
        <div style={{ display: "flex", gap: 48 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <StoryLabel title="Dynamic string icon" />
                <EntityTitle icon="document" title="Annual Report" subtitle="Q4 2025 Financial Summary" />
                <EntityTitle icon="bookmark" title="Saved Search" subtitle="Modified 2 hours ago" />
                <EntityTitle icon="flash" title="Alert Rule" subtitle="Active — 3 triggers today" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <StoryLabel title="Current static icon" />
                <EntityTitle icon={<Document />} title="Annual Report" subtitle="Q4 2025 Financial Summary" />
                <EntityTitle icon={<Bookmark />} title="Saved Search" subtitle="Modified 2 hours ago" />
                <EntityTitle icon={<Flash />} title="Alert Rule" subtitle="Active — 3 triggers today" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <StoryLabel title="Next static icon" />
                <EntityTitle icon={<DocumentIcon />} title="Annual Report" subtitle="Q4 2025 Financial Summary" />
                <EntityTitle icon={<BookmarkIcon />} title="Saved Search" subtitle="Modified 2 hours ago" />
                <EntityTitle icon={<FlashIcon />} title="Alert Rule" subtitle="Active — 3 triggers today" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <StoryLabel title="Dynamic next icon" />
                <EntityTitle
                    icon={<IconNext icon="document" />}
                    title="Annual Report"
                    subtitle="Q4 2025 Financial Summary"
                />
                <EntityTitle icon={<IconNext icon="bookmark" />} title="Saved Search" subtitle="Modified 2 hours ago" />
                <EntityTitle icon={<IconNext icon="flash" />} title="Alert Rule" subtitle="Active — 3 triggers today" />
            </div>
        </div>
    ),
};
