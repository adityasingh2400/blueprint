/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { storybookLayoutDecorator, StoryLabel } from "@storybook-common";

import {
    Cog,
    Document,
    Download,
    FolderClose,
    Home,
    Notifications,
    Search,
    Star,
    Trash,
    Upload,
} from "@blueprintjs/icons";
import {
    CogIcon,
    DocumentIcon,
    DownloadIcon,
    FolderCloseIcon,
    HomeIcon,
    NotificationsIcon,
    SearchIcon,
    StarIcon,
    TrashIcon,
    UploadIcon,
} from "@blueprintjs/icons/next";

import { Intent } from "../../common";
import { IconNext } from "../icon-next/iconNext";

import { Menu } from "./menu";
import { MenuDivider } from "./menuDivider";
import { MenuItem } from "./menuItem";

const meta: Meta<typeof Menu> = {
    title: "Next Icons/Menu",
    component: Menu,
    decorators: [storybookLayoutDecorator],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconComparison: Story = {
    name: "Icon API Comparison",
    render: () => (
        <div style={{ display: "flex", gap: 24 }}>
            <div>
                <StoryLabel title="Dynamic string icon" />
                <Menu style={{ width: 200 }}>
                    <MenuItem icon="home" text="Home" />
                    <MenuItem icon="search" text="Search" />
                    <MenuItem icon="cog" text="Settings" />
                    <MenuDivider />
                    <MenuItem icon="download" text="Download" />
                    <MenuItem icon="upload" text="Upload" />
                    <MenuItem icon="trash" text="Delete" intent={Intent.DANGER} />
                </Menu>
            </div>
            <div>
                <StoryLabel title="Current static icon" />
                <Menu style={{ width: 200 }}>
                    <MenuItem icon={<Home />} text="Home" />
                    <MenuItem icon={<Search />} text="Search" />
                    <MenuItem icon={<Cog />} text="Settings" />
                    <MenuDivider />
                    <MenuItem icon={<Download />} text="Download" />
                    <MenuItem icon={<Upload />} text="Upload" />
                    <MenuItem icon={<Trash />} text="Delete" intent={Intent.DANGER} />
                </Menu>
            </div>
            <div>
                <StoryLabel title="Next static icon" />
                <Menu style={{ width: 200 }}>
                    <MenuItem icon={<HomeIcon />} text="Home" />
                    <MenuItem icon={<SearchIcon />} text="Search" />
                    <MenuItem icon={<CogIcon />} text="Settings" />
                    <MenuDivider />
                    <MenuItem icon={<DownloadIcon />} text="Download" />
                    <MenuItem icon={<UploadIcon />} text="Upload" />
                    <MenuItem icon={<TrashIcon />} text="Delete" intent={Intent.DANGER} />
                </Menu>
            </div>
            <div>
                <StoryLabel title="Dynamic next icon" />
                <Menu style={{ width: 200 }}>
                    <MenuItem icon={<IconNext icon="home" />} text="Home" />
                    <MenuItem icon={<IconNext icon="search" />} text="Search" />
                    <MenuItem icon={<IconNext icon="cog" />} text="Settings" />
                    <MenuDivider />
                    <MenuItem icon={<IconNext icon="download" />} text="Download" />
                    <MenuItem icon={<IconNext icon="upload" />} text="Upload" />
                    <MenuItem icon={<IconNext icon="trash" />} text="Delete" intent={Intent.DANGER} />
                </Menu>
            </div>
        </div>
    ),
};

export const Submenus: Story = {
    name: "Submenus",
    render: () => (
        <div style={{ display: "flex", gap: 24 }}>
            <div>
                <StoryLabel title="Dynamic string icon" />
                <Menu style={{ width: 220 }}>
                    <MenuItem icon="folder-close" text="Files">
                        <MenuItem icon="document" text="Report.pdf" />
                        <MenuItem icon="document" text="Notes.txt" />
                        <MenuItem icon="star" text="Favorites">
                            <MenuItem icon="document" text="Saved.pdf" />
                        </MenuItem>
                    </MenuItem>
                    <MenuItem icon="cog" text="Settings" />
                </Menu>
            </div>
            <div>
                <StoryLabel title="Current static icon" />
                <Menu style={{ width: 220 }}>
                    <MenuItem icon={<FolderClose />} text="Files">
                        <MenuItem icon={<Document />} text="Report.pdf" />
                        <MenuItem icon={<Document />} text="Notes.txt" />
                        <MenuItem icon={<Star />} text="Favorites">
                            <MenuItem icon={<Document />} text="Saved.pdf" />
                        </MenuItem>
                    </MenuItem>
                    <MenuItem icon={<Cog />} text="Settings" />
                </Menu>
            </div>
            <div>
                <StoryLabel title="Next static icon" />
                <Menu style={{ width: 220 }}>
                    <MenuItem icon={<FolderCloseIcon />} text="Files">
                        <MenuItem icon={<DocumentIcon />} text="Report.pdf" />
                        <MenuItem icon={<DocumentIcon />} text="Notes.txt" />
                        <MenuItem icon={<StarIcon />} text="Favorites">
                            <MenuItem icon={<DocumentIcon />} text="Saved.pdf" />
                        </MenuItem>
                    </MenuItem>
                    <MenuItem icon={<CogIcon />} text="Settings" />
                </Menu>
            </div>
            <div>
                <StoryLabel title="Dynamic next icon" />
                <Menu style={{ width: 220 }}>
                    <MenuItem icon={<IconNext icon="folder-close" />} text="Files">
                        <MenuItem icon={<IconNext icon="document" />} text="Report.pdf" />
                        <MenuItem icon={<IconNext icon="document" />} text="Notes.txt" />
                        <MenuItem icon={<IconNext icon="star" />} text="Favorites">
                            <MenuItem icon={<IconNext icon="document" />} text="Saved.pdf" />
                        </MenuItem>
                    </MenuItem>
                    <MenuItem icon={<IconNext icon="cog" />} text="Settings" />
                </Menu>
            </div>
        </div>
    ),
};

export const IntentComparison: Story = {
    name: "Intents",
    render: () => (
        <div style={{ display: "flex", gap: 24 }}>
            <div>
                <StoryLabel title="Dynamic string icon" />
                <Menu style={{ width: 200 }}>
                    <MenuItem icon="notifications" text="Info" intent={Intent.PRIMARY} />
                    <MenuItem icon="notifications" text="Success" intent={Intent.SUCCESS} />
                    <MenuItem icon="notifications" text="Warning" intent={Intent.WARNING} />
                    <MenuItem icon="notifications" text="Danger" intent={Intent.DANGER} />
                </Menu>
            </div>
            <div>
                <StoryLabel title="Current static icon" />
                <Menu style={{ width: 200 }}>
                    <MenuItem icon={<Notifications />} text="Info" intent={Intent.PRIMARY} />
                    <MenuItem icon={<Notifications />} text="Success" intent={Intent.SUCCESS} />
                    <MenuItem icon={<Notifications />} text="Warning" intent={Intent.WARNING} />
                    <MenuItem icon={<Notifications />} text="Danger" intent={Intent.DANGER} />
                </Menu>
            </div>
            <div>
                <StoryLabel title="Next static icon" />
                <Menu style={{ width: 200 }}>
                    <MenuItem icon={<NotificationsIcon />} text="Info" intent={Intent.PRIMARY} />
                    <MenuItem icon={<NotificationsIcon />} text="Success" intent={Intent.SUCCESS} />
                    <MenuItem icon={<NotificationsIcon />} text="Warning" intent={Intent.WARNING} />
                    <MenuItem icon={<NotificationsIcon />} text="Danger" intent={Intent.DANGER} />
                </Menu>
            </div>
            <div>
                <StoryLabel title="Dynamic next icon" />
                <Menu style={{ width: 200 }}>
                    <MenuItem icon={<IconNext icon="notifications" />} text="Info" intent={Intent.PRIMARY} />
                    <MenuItem icon={<IconNext icon="notifications" />} text="Success" intent={Intent.SUCCESS} />
                    <MenuItem icon={<IconNext icon="notifications" />} text="Warning" intent={Intent.WARNING} />
                    <MenuItem icon={<IconNext icon="notifications" />} text="Danger" intent={Intent.DANGER} />
                </Menu>
            </div>
        </div>
    ),
};
