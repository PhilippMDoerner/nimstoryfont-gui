import { RouterTestingModule } from '@angular/router/testing';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { ListEntry } from '../_models/list';
import { ListComponent } from './list.component';

const dummyEntries: ListEntry[] = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Contact',
    link: '/contact',
  },
  {
    label: 'Blog',
    link: '/blog',
  },
  {
    label: 'Services',
    link: '/services',
  },
  {
    label: 'Products',
    link: '/products',
  },
  {
    label: 'Team',
    link: '/team',
  },
  {
    label: 'Careers',
    link: '/careers',
  },
  {
    label: 'Portfolio',
    link: '/portfolio',
  },
  {
    label: 'FAQ',
    link: '/faq',
  },
  {
    label: 'Events',
    link: '/events',
  },
  {
    label: 'Terms of Service',
    link: '/terms',
  },
  {
    label: 'Privacy Policy',
    link: '/privacy',
  },
  {
    label: 'Support',
    link: '/support',
  },
  {
    label: 'Feedback',
    link: '/feedback',
  },
  {
    label: 'Documentation',
    link: '/docs',
  },
  {
    label: 'Community',
    link: '/community',
  },
  {
    label: 'Login',
    link: '/login',
  },
  {
    label: 'Register',
    link: '/register',
  },
  {
    label: 'Logout',
    link: '/logout',
  },
];

export default {
  title: 'DesignSystem/Molecules/ListComponent',
  component: ListComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
  ],
  args: {
    enableCreate: true,
    heading: 'Heading text',
    createLabel: 'Create Entry',
    entries: dummyEntries,
  },
} as Meta<ListComponent>;

const Template: StoryFn<ListComponent> = (args) => ({
  props: {
    ...args,
    create: action('create'),
  },
});

export const Default = Template.bind({});
Default.args = {};

export const NoCreate = Template.bind({});
NoCreate.args = {
  enableCreate: false,
};

export const NoEntries = Template.bind({});
NoEntries.args = {
  entries: [],
};
