import { Ann4bristolPage } from './app.po';

describe('ann4bristol App', function() {
  let page: Ann4bristolPage;

  beforeEach(() => {
    page = new Ann4bristolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
