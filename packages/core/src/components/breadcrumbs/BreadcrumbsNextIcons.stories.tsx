/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { storybookLayoutDecorator, StoryLabel } from "@storybook-common";

import { Document, FolderClose, Home } from "@blueprintjs/icons";
import { DocumentIcon, FolderCloseIcon, HomeIcon } from "@blueprintjs/icons/next";

import { IconNext } from "../icon-next/iconNext";

import { Breadcrumbs } from "./breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
    title: "Next Icons/Breadcrumbs",
    component: Breadcrumbs,
    decorators: [storybookLayoutDecorator],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconComparison: Story = {
    name: "Icon API Comparison",
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 400 }}>
            <div>
                <StoryLabel title="Dynamic string icon" />
                <Breadcrumbs
                    items={[
                        { icon: "home", text: "Home" },
                        { icon: "folder-close", text: "Projects" },
                        { icon: "document", text: "Report.pdf" },
                    ]}
                />
            </div>
            <div>
                <StoryLabel title="Current static icon" />
                <Breadcrumbs
                    items={[
                        { icon: <Home />, text: "Home" },
                        { icon: <FolderClose />, text: "Projects" },
                        { icon: <Document />, text: "Report.pdf" },
                    ]}
                />
            </div>
            <div>
                <StoryLabel title="Next static icon" />
                <Breadcrumbs
                    items={[
                        { icon: <HomeIcon />, text: "Home" },
                        { icon: <FolderCloseIcon />, text: "Projects" },
                        { icon: <DocumentIcon />, text: "Report.pdf" },
                    ]}
                />
            </div>
            <div>
                <StoryLabel title="Dynamic next icon" />
                <Breadcrumbs
                    items={[
                        { icon: <IconNext icon="home" />, text: "Home" },
                        { icon: <IconNext icon="folder-close" />, text: "Projects" },
                        { icon: <IconNext icon="document" />, text: "Report.pdf" },
                    ]}
                />
            </div>
        </div>
    ),
};
