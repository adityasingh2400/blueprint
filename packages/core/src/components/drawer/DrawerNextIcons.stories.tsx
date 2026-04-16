/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { storybookLayoutDecorator, StoryLabel } from "@storybook-common";
import { useCallback, useState } from "react";

import { Map } from "@blueprintjs/icons";
import { MapIcon } from "@blueprintjs/icons/next";

import { Button } from "../button/buttons";
import { IconNext } from "../icon-next/iconNext";

import { Drawer } from "./drawer";

const meta: Meta<typeof Drawer> = {
    title: "Next Icons/Drawer",
    component: Drawer,
    decorators: [storybookLayoutDecorator],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

function DrawerDemo({ iconProp, label }: { iconProp: React.ComponentProps<typeof Drawer>["icon"]; label: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);

    return (
        <div>
            <StoryLabel title={label} />
            <Button text={`Open (${label})`} onClick={open} />
            <Drawer isOpen={isOpen} onClose={close} icon={iconProp} title={`Drawer — ${label}`}>
                <div style={{ padding: 20 }}>Drawer content with a {label} icon in the header.</div>
            </Drawer>
        </div>
    );
}

export const IconComparison: Story = {
    name: "Icon API Comparison",
    render: () => (
        <div style={{ display: "flex", gap: 24 }}>
            <DrawerDemo iconProp="map" label="String" />
            <DrawerDemo iconProp={<Map />} label="Static" />
            <DrawerDemo iconProp={<MapIcon />} label="Next" />
            <DrawerDemo iconProp={<IconNext icon="map" />} label="Dynamic" />
        </div>
    ),
};
