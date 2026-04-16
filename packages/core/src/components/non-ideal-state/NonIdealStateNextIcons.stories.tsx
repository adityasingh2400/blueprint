/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { storybookLayoutDecorator, StoryLabel } from "@storybook-common";

import { Search } from "@blueprintjs/icons";
import { AddIcon, PlusIcon, SearchIcon } from "@blueprintjs/icons/next";

import { Intent } from "../../common";
import { Button } from "../button/buttons";
import { IconNext } from "../icon-next/iconNext";

import { NonIdealState, NonIdealStateIconSize } from "./nonIdealState";

const meta: Meta<typeof NonIdealState> = {
    title: "Next Icons/NonIdealState",
    component: NonIdealState,
    decorators: [storybookLayoutDecorator],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof NonIdealState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconComparison: Story = {
    name: "Icon API Comparison",
    render: () => (
        <div style={{ display: "flex", gap: 48 }}>
            <div style={{ width: 300 }}>
                <StoryLabel title="Dynamic string icon" />
                <NonIdealState
                    icon="search"
                    title="No results"
                    description="Try a different query."
                    action={<Button icon="plus" intent={Intent.PRIMARY} text="New item" variant="outlined" />}
                />
            </div>
            <div style={{ width: 300 }}>
                <StoryLabel title="Current static icon" />
                <NonIdealState
                    icon={<Search size={NonIdealStateIconSize.STANDARD} />}
                    title="No results"
                    description="Try a different query."
                    action={<Button icon="plus" intent={Intent.PRIMARY} text="New item" variant="outlined" />}
                />
            </div>
            <div style={{ width: 300 }}>
                <StoryLabel title="Next static icon" />
                <NonIdealState
                    icon={<SearchIcon size={NonIdealStateIconSize.STANDARD} />}
                    title="No results"
                    description="Try a different query."
                    action={<Button icon={<PlusIcon />} intent={Intent.PRIMARY} text="New item" variant="outlined" />}
                />
            </div>
            <div style={{ width: 300 }}>
                <StoryLabel title="Dynamic next icon" />
                <NonIdealState
                    icon={<IconNext icon="search" size={NonIdealStateIconSize.STANDARD} />}
                    title="No results"
                    description="Try a different query."
                    action={
                        <Button
                            icon={<IconNext icon="plus" />}
                            intent={Intent.PRIMARY}
                            text="New item"
                            variant="outlined"
                        />
                    }
                />
            </div>
        </div>
    ),
};
