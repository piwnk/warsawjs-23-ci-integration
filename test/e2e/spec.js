import { ClientFunction } from 'testcafe';
import Page from './page-model';


const page = new Page();

fixture`Getting Started`
  .page`piecioshka.pl/blog`;

const getLocation = ClientFunction(() => document.location.href);


test('KONTAKT button opens /wspolpraca route', async t => {
  // const buttonKontakt = Selector('.menu-item a').withText('KONTAKT');

  await t
    .click(page.menuItems.withText('KONTAKT'))
    .expect(getLocation())
    .match(/wspolpraca\/?$/);
})

test('all links work', async t => {
  // const allLinks = Selector('a');

  for (let i = 0; i < page.links.count; i++) {
    const mainpage = getLocation();
    await t
      .click(page.links.nth(i))
      .expect(getLocation())
      .notEql(mainpage);
  }
})


test('post tags in each post', async t => {
  // const posts = Selector('#posts .post-tags');

  for (let i = 0; i < page.posts.count; i++) {
    await t
      .expect(page.posts.nth(i))
  }
})
