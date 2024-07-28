import { createElement as h } from 'https://esm.sh/react';

function iconMenu() {
  return h(
    'a',
    {
      className: 'MenuContainer',
      href: '/',
    },
    h('img', {
      className: 'iconImg',
      src: './pubilc/icons/menu-live.svg',
      alt: '',
    }),
    h(
      'span',
      {
        className: 'menuText',
      },
      'Text'
    )
  );
}

/* function TextMenu() {
  return h(
    'a',
    {
      className: 'MenuContainer',
      href: '/',
    },
    h('span', {
      className: 'menuText',
      content: 'TEXT',
    })
  );
} */

export default iconMenu;
