import Footer from "./../components/Footer";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Footer",
    component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof Footer>;

export const DefaultFooter: Story = {};
