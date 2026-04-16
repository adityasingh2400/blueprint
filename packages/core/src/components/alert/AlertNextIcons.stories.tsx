/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { storybookLayoutDecorator, StoryLabel } from "@storybook-common";
import { useCallback, useState } from "react";

import { WarningSign } from "@blueprintjs/icons";
import { WarningSignIcon } from "@blueprintjs/icons/next";

import { Intent } from "../../common";
import { Button } from "../button/buttons";
import { IconNext } from "../icon-next/iconNext";

import { Alert } from "./alert";

const meta: Meta<typeof Alert> = {
    title: "Next Icons/Alert",
    component: Alert,
    decorators: [storybookLayoutDecorator],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

function AlertDemo({ iconProp, label }: { iconProp: React.ComponentProps<typeof Alert>["icon"]; label: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    return (
        <div>
            <StoryLabel title={label} />
            <Button text={`Open (${label})`} intent={Intent.WARNING} onClick={open} />
            <Alert
                isOpen={isOpen}
                onClose={close}
                icon={iconProp}
                intent={Intent.WARNING}
                confirmButtonText="OK"
                cancelButtonText="Cancel"
            >
                Alert with a {label} icon.
            </Alert>
        </div>
    );
}

export const IconComparison: Story = {
    name: "Icon API Comparison",
    render: () => (
        <div style={{ display: "flex", gap: 24 }}>
            <AlertDemo iconProp="warning-sign" label="String" />
            <AlertDemo iconProp={<WarningSign size={40} />} label="Static" />
            <AlertDemo iconProp={<WarningSignIcon size={40} />} label="Next" />
            <AlertDemo iconProp={<IconNext icon="warning-sign" size={40} />} label="Dynamic" />
        </div>
    ),
};
