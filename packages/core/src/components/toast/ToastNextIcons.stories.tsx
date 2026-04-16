/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { storybookLayoutDecorator, StoryLabel } from "@storybook-common";

import { Notifications } from "@blueprintjs/icons";
import { NotificationsIcon } from "@blueprintjs/icons/next";

import { Intent } from "../../common";
import { IconNext } from "../icon-next/iconNext";

import { Toast } from "./toast";

const noop = () => {
    /* noop */
};

const meta: Meta<typeof Toast> = {
    title: "Next Icons/Toast",
    component: Toast,
    decorators: [storybookLayoutDecorator],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconComparison: Story = {
    name: "Icon API Comparison",
    render: () => (
        <div style={{ display: "flex", gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <StoryLabel title="Dynamic string icon" />
                {Object.values(Intent).map(intent => (
                    <Toast
                        key={intent}
                        intent={intent}
                        icon="notifications"
                        message={`Toast (${intent || "none"})`}
                        timeout={0}
                        onDismiss={noop}
                    />
                ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <StoryLabel title="Current static icon" />
                {Object.values(Intent).map(intent => (
                    <Toast
                        key={intent}
                        intent={intent}
                        icon={<Notifications />}
                        message={`Toast (${intent || "none"})`}
                        timeout={0}
                        onDismiss={noop}
                    />
                ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <StoryLabel title="Next static icon" />
                {Object.values(Intent).map(intent => (
                    <Toast
                        key={intent}
                        intent={intent}
                        icon={<NotificationsIcon />}
                        message={`Toast (${intent || "none"})`}
                        timeout={0}
                        onDismiss={noop}
                    />
                ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <StoryLabel title="Dynamic next icon" />
                {Object.values(Intent).map(intent => (
                    <Toast
                        key={intent}
                        intent={intent}
                        icon={<IconNext icon="notifications" />}
                        message={`Toast (${intent || "none"})`}
                        timeout={0}
                        onDismiss={noop}
                    />
                ))}
            </div>
        </div>
    ),
};
