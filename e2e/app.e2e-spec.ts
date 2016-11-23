import { Mk1Page } from './app.po';

describe('mk1 App', function() {
  let page: Mk1Page;

  beforeEach(() => {
    page = new Mk1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
