/* !
 * (c) Copyright 2026 Palantir Technologies Inc. All rights reserved.
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { storybookLayoutDecorator, StoryLabel } from "@storybook-common";

import { Document, Edit, Endorsed, Error, EyeOn, FolderClose, Lock, Star, Tag, WarningSign } from "@blueprintjs/icons";
import {
    DocumentIcon,
    EditIcon,
    EndorsedIcon,
    ErrorIcon,
    EyeOnIcon,
    FolderCloseIcon,
    LockIcon,
    StarIcon,
    TagIcon,
    WarningSignIcon,
} from "@blueprintjs/icons/next";

import { Classes, Intent } from "../../common";
import { Icon } from "../icon/icon";
import { IconNext } from "../icon-next/iconNext";

import { Tree } from "./tree";
import type { TreeNodeInfo } from "./treeTypes";

const meta: Meta<typeof Tree> = {
    title: "Next Icons/Tree",
    component: Tree,
    decorators: [storybookLayoutDecorator],
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Tree>;

export default meta;
type Story = StoryObj<typeof meta>;

const STRING_NODES: TreeNodeInfo[] = [
    {
        id: 0,
        icon: "folder-close",
        isExpanded: true,
        label: "Documents",
        childNodes: [
            { id: 1, icon: "document", label: "Report.pdf" },
            { id: 2, icon: "edit", label: "Draft.docx" },
            {
                id: 3,
                icon: "folder-close",
                isExpanded: true,
                label: "Images",
                childNodes: [
                    { id: 4, icon: "eye-on", label: "preview.png" },
                    { id: 5, icon: "star", label: "favorite.jpg" },
                ],
            },
        ],
    },
    { id: 6, icon: "lock", label: "Private", disabled: true },
];

const STATIC_NODES: TreeNodeInfo[] = [
    {
        id: 0,
        icon: <FolderClose />,
        isExpanded: true,
        label: "Documents",
        childNodes: [
            { id: 1, icon: <Document />, label: "Report.pdf" },
            { id: 2, icon: <Edit />, label: "Draft.docx" },
            {
                id: 3,
                icon: <FolderClose />,
                isExpanded: true,
                label: "Images",
                childNodes: [
                    { id: 4, icon: <EyeOn />, label: "preview.png" },
                    { id: 5, icon: <Star />, label: "favorite.jpg" },
                ],
            },
        ],
    },
    { id: 6, icon: <Lock />, label: "Private", disabled: true },
];

const NEXT_NODES: TreeNodeInfo[] = [
    {
        id: 0,
        icon: <FolderCloseIcon />,
        isExpanded: true,
        label: "Documents",
        childNodes: [
            { id: 1, icon: <DocumentIcon />, label: "Report.pdf" },
            { id: 2, icon: <EditIcon />, label: "Draft.docx" },
            {
                id: 3,
                icon: <FolderCloseIcon />,
                isExpanded: true,
                label: "Images",
                childNodes: [
                    { id: 4, icon: <EyeOnIcon />, label: "preview.png" },
                    { id: 5, icon: <StarIcon />, label: "favorite.jpg" },
                ],
            },
        ],
    },
    { id: 6, icon: <LockIcon />, label: "Private", disabled: true },
];

const STRING_INTENT_NODES: TreeNodeInfo[] = [
    {
        id: 0,
        icon: "folder-close",
        isExpanded: true,
        label: "Project",
        childNodes: [
            {
                id: 1,
                icon: <Icon icon="tag" intent={Intent.PRIMARY} className={Classes.TREE_NODE_ICON} />,
                label: "Primary tag",
            },
            {
                id: 2,
                icon: <Icon icon="endorsed" intent={Intent.SUCCESS} className={Classes.TREE_NODE_ICON} />,
                label: "Success endorsed",
            },
            {
                id: 3,
                icon: <Icon icon="warning-sign" intent={Intent.WARNING} className={Classes.TREE_NODE_ICON} />,
                label: "Warning sign",
            },
            {
                id: 4,
                icon: <Icon icon="error" intent={Intent.DANGER} className={Classes.TREE_NODE_ICON} />,
                label: "Danger error",
            },
        ],
    },
];

const STATIC_INTENT_NODES: TreeNodeInfo[] = [
    {
        id: 0,
        icon: <FolderClose />,
        isExpanded: true,
        label: "Project",
        childNodes: [
            { id: 1, icon: <Tag className={Classes.intentClass(Intent.PRIMARY)} />, label: "Primary tag" },
            { id: 2, icon: <Endorsed className={Classes.intentClass(Intent.SUCCESS)} />, label: "Success endorsed" },
            { id: 3, icon: <WarningSign className={Classes.intentClass(Intent.WARNING)} />, label: "Warning sign" },
            { id: 4, icon: <Error className={Classes.intentClass(Intent.DANGER)} />, label: "Danger error" },
        ],
    },
];

const DYNAMIC_NODES: TreeNodeInfo[] = [
    {
        id: 0,
        icon: <IconNext icon="folder-close" />,
        isExpanded: true,
        label: "Documents",
        childNodes: [
            { id: 1, icon: <IconNext icon="document" />, label: "Report.pdf" },
            { id: 2, icon: <IconNext icon="edit" />, label: "Draft.docx" },
            {
                id: 3,
                icon: <IconNext icon="folder-close" />,
                isExpanded: true,
                label: "Images",
                childNodes: [
                    { id: 4, icon: <IconNext icon="eye-on" />, label: "preview.png" },
                    { id: 5, icon: <IconNext icon="star" />, label: "favorite.jpg" },
                ],
            },
        ],
    },
    { id: 6, icon: <IconNext icon="lock" />, label: "Private", disabled: true },
];

const NEXT_INTENT_NODES: TreeNodeInfo[] = [
    {
        id: 0,
        icon: <FolderCloseIcon />,
        isExpanded: true,
        label: "Project",
        childNodes: [
            { id: 1, icon: <TagIcon className={Classes.intentClass(Intent.PRIMARY)} />, label: "Primary tag" },
            {
                id: 2,
                icon: <EndorsedIcon className={Classes.intentClass(Intent.SUCCESS)} />,
                label: "Success endorsed",
            },
            { id: 3, icon: <WarningSignIcon className={Classes.intentClass(Intent.WARNING)} />, label: "Warning sign" },
            { id: 4, icon: <ErrorIcon className={Classes.intentClass(Intent.DANGER)} />, label: "Danger error" },
        ],
    },
];

const DYNAMIC_INTENT_NODES: TreeNodeInfo[] = [
    {
        id: 0,
        icon: <IconNext icon="folder-close" />,
        isExpanded: true,
        label: "Project",
        childNodes: [
            {
                id: 1,
                icon: <IconNext icon="tag" className={Classes.intentClass(Intent.PRIMARY)} />,
                label: "Primary tag",
            },
            {
                id: 2,
                icon: <IconNext icon="endorsed" className={Classes.intentClass(Intent.SUCCESS)} />,
                label: "Success endorsed",
            },
            {
                id: 3,
                icon: <IconNext icon="warning-sign" className={Classes.intentClass(Intent.WARNING)} />,
                label: "Warning sign",
            },
            {
                id: 4,
                icon: <IconNext icon="error" className={Classes.intentClass(Intent.DANGER)} />,
                label: "Danger error",
            },
        ],
    },
];

export const IntentComparison: Story = {
    name: "Intents",
    render: () => (
        <div style={{ display: "flex", gap: 24 }}>
            <div>
                <StoryLabel title="Dynamic string icon" />
                <Tree contents={STRING_INTENT_NODES} />
            </div>
            <div>
                <StoryLabel title="Current static icon" />
                <Tree contents={STATIC_INTENT_NODES} />
            </div>
            <div>
                <StoryLabel title="Next static icon" />
                <Tree contents={NEXT_INTENT_NODES} />
            </div>
            <div>
                <StoryLabel title="Dynamic next icon" />
                <Tree contents={DYNAMIC_INTENT_NODES} />
            </div>
        </div>
    ),
};

export const IconComparison: Story = {
    name: "Icon API Comparison",
    render: () => (
        <div style={{ display: "flex", gap: 24 }}>
            <div>
                <StoryLabel title="Dynamic string icon" />
                <Tree contents={STRING_NODES} />
            </div>
            <div>
                <StoryLabel title="Current static icon" />
                <Tree contents={STATIC_NODES} />
            </div>
            <div>
                <StoryLabel title="Next static icon" />
                <Tree contents={NEXT_NODES} />
            </div>
            <div>
                <StoryLabel title="Dynamic next icon" />
                <Tree contents={DYNAMIC_NODES} />
            </div>
        </div>
    ),
};
