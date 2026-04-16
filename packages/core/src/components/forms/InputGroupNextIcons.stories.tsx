/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { storybookLayoutDecorator, StoryLabel } from "@storybook-common";

import { Envelope, Lock, Search } from "@blueprintjs/icons";
import { EnvelopeIcon, LockIcon, SearchIcon } from "@blueprintjs/icons/next";

import { Size } from "../../common";
import { IconNext } from "../icon-next/iconNext";

import { InputGroup } from "./inputGroup";

const meta: Meta<typeof InputGroup> = {
    title: "Next Icons/InputGroup",
    component: InputGroup,
    decorators: [storybookLayoutDecorator],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconComparison: Story = {
    name: "Icon API Comparison",
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 300 }}>
            <div>
                <StoryLabel title="Dynamic string icon" />
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <InputGroup leftIcon="search" placeholder="Search..." />
                    <InputGroup leftIcon="lock" placeholder="Password" type="password" />
                    <InputGroup leftIcon="envelope" placeholder="Email address" />
                </div>
            </div>
            <div>
                <StoryLabel title="Current static icon" />
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <InputGroup leftIcon={<Search />} placeholder="Search..." />
                    <InputGroup leftIcon={<Lock />} placeholder="Password" type="password" />
                    <InputGroup leftIcon={<Envelope />} placeholder="Email address" />
                </div>
            </div>
            <div>
                <StoryLabel title="Next static icon" />
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <InputGroup leftIcon={<SearchIcon />} placeholder="Search..." />
                    <InputGroup leftIcon={<LockIcon />} placeholder="Password" type="password" />
                    <InputGroup leftIcon={<EnvelopeIcon />} placeholder="Email address" />
                </div>
            </div>
            <div>
                <StoryLabel title="Dynamic next icon" />
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <InputGroup leftIcon={<IconNext icon="search" />} placeholder="Search..." />
                    <InputGroup leftIcon={<IconNext icon="lock" />} placeholder="Password" type="password" />
                    <InputGroup leftIcon={<IconNext icon="envelope" />} placeholder="Email address" />
                </div>
            </div>
        </div>
    ),
};

export const SizeComparison: Story = {
    name: "Sizes",
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 300 }}>
            {Object.values(Size).map(size => (
                <div key={size}>
                    <StoryLabel title={`${size} — string`} />
                    <InputGroup leftIcon="search" placeholder="Search..." size={size} />
                    <div style={{ marginTop: 8 }} />
                    <StoryLabel title={`${size} — next static`} />
                    <InputGroup leftIcon={<SearchIcon />} placeholder="Search..." size={size} />
                    <div style={{ marginTop: 8 }} />
                    <StoryLabel title={`${size} — dynamic next`} />
                    <InputGroup leftIcon={<IconNext icon="search" />} placeholder="Search..." size={size} />
                </div>
            ))}
        </div>
    ),
};
