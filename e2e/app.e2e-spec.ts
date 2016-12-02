import { ClickRating1Page } from './app.po';

describe('click-rating-1 App', function() {
  let page: ClickRating1Page;

  beforeEach(() => {
    page = new ClickRating1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
