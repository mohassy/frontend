import Navbar from '../components/Navbar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Navbar',
    component: Navbar
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

export const LoggedIn: Story = {
    args: {
        user: {
            name: 'Mohammed Siad Hassan',
            CartItems: 3
        }
    }
};
export const LoggedOut: Story = {};
