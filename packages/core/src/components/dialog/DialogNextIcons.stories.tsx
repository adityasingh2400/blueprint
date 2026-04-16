/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { storybookLayoutDecorator, StoryLabel } from "@storybook-common";
import { useCallback, useState } from "react";

import { InfoSign } from "@blueprintjs/icons";
import { InfoSignIcon } from "@blueprintjs/icons/next";

import { Button } from "../button/buttons";
import { IconNext } from "../icon-next/iconNext";

import { Dialog } from "./dialog";
import { DialogBody } from "./dialogBody";

const meta: Meta<typeof Dialog> = {
    title: "Next Icons/Dialog",
    component: Dialog,
    decorators: [storybookLayoutDecorator],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

function DialogDemo({ iconProp, label }: { iconProp: React.ComponentProps<typeof Dialog>["icon"]; label: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    return (
        <div>
            <StoryLabel title={label} />
            <Button text={`Open (${label})`} onClick={open} />
            <Dialog isOpen={isOpen} onClose={close} icon={iconProp} title={`Dialog — ${label}`}>
                <DialogBody>Dialog content with a {label} icon in the header.</DialogBody>
            </Dialog>
        </div>
    );
}

export const IconComparison: Story = {
    name: "Icon API Comparison",
    render: () => (
        <div style={{ display: "flex", gap: 24 }}>
            <DialogDemo iconProp="info-sign" label="String" />
            <DialogDemo iconProp={<InfoSign />} label="Static" />
            <DialogDemo iconProp={<InfoSignIcon />} label="Next" />
            <DialogDemo iconProp={<IconNext icon="info-sign" />} label="Dynamic" />
        </div>
    ),
};
