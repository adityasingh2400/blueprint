/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { storybookLayoutDecorator, StoryLabel } from "@storybook-common";

import { Error, InfoSign, TickCircle, WarningSign } from "@blueprintjs/icons";
import { ErrorIcon, InfoSignIcon, TickCircleIcon, WarningSignIcon } from "@blueprintjs/icons/next";

import { Intent } from "../../common";
import { IconNext } from "../icon-next/iconNext";

import { Callout } from "./callout";

const meta: Meta<typeof Callout> = {
    title: "Next Icons/Callout",
    component: Callout,
    decorators: [storybookLayoutDecorator],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconComparison: Story = {
    name: "Icon API Comparison",
    render: () => (
        <div style={{ display: "flex", gap: 24, width: 900 }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                <StoryLabel title="Dynamic string icon" />
                <Callout icon="info-sign" intent={Intent.PRIMARY} title="Info">
                    Primary callout.
                </Callout>
                <Callout icon="tick-circle" intent={Intent.SUCCESS} title="Success">
                    Success callout.
                </Callout>
                <Callout icon="warning-sign" intent={Intent.WARNING} title="Warning">
                    Warning callout.
                </Callout>
                <Callout icon="error" intent={Intent.DANGER} title="Error">
                    Danger callout.
                </Callout>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                <StoryLabel title="Current static icon" />
                <Callout icon={<InfoSign />} intent={Intent.PRIMARY} title="Info">
                    Primary callout.
                </Callout>
                <Callout icon={<TickCircle />} intent={Intent.SUCCESS} title="Success">
                    Success callout.
                </Callout>
                <Callout icon={<WarningSign />} intent={Intent.WARNING} title="Warning">
                    Warning callout.
                </Callout>
                <Callout icon={<Error />} intent={Intent.DANGER} title="Error">
                    Danger callout.
                </Callout>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                <StoryLabel title="Next static icon" />
                <Callout icon={<InfoSignIcon />} intent={Intent.PRIMARY} title="Info">
                    Primary callout.
                </Callout>
                <Callout icon={<TickCircleIcon />} intent={Intent.SUCCESS} title="Success">
                    Success callout.
                </Callout>
                <Callout icon={<WarningSignIcon />} intent={Intent.WARNING} title="Warning">
                    Warning callout.
                </Callout>
                <Callout icon={<ErrorIcon />} intent={Intent.DANGER} title="Error">
                    Danger callout.
                </Callout>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                <StoryLabel title="Dynamic next icon" />
                <Callout icon={<IconNext icon="info-sign" />} intent={Intent.PRIMARY} title="Info">
                    Primary callout.
                </Callout>
                <Callout icon={<IconNext icon="tick-circle" />} intent={Intent.SUCCESS} title="Success">
                    Success callout.
                </Callout>
                <Callout icon={<IconNext icon="warning-sign" />} intent={Intent.WARNING} title="Warning">
                    Warning callout.
                </Callout>
                <Callout icon={<IconNext icon="error" />} intent={Intent.DANGER} title="Error">
                    Danger callout.
                </Callout>
            </div>
        </div>
    ),
};
