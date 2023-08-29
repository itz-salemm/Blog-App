import TwitterIcon from '@/components/icons/twitter-contact-icon';
import GithubIcon from '@/components/icons/github-contact-icon';
import ContactIcon from '@/components/icons/contact-icon';

import { FooterAttributes } from 'types';

export const footerConfig: FooterAttributes = {
    copyright: '2023 Tim. All rights reserved. No Cookies.',
    socials: [
        {
            name: 'Twitter',
            href: 'https://twitter.com/timtbdev',
            icon: TwitterIcon,
        },
        {
            name: 'GitHub',
            href: 'https://github.com/timtbdev/projects',
            icon: GithubIcon,
        },
        {
            name: 'Contact',
            href: '/contact',
            icon: ContactIcon,
        },
    ],
};