import { InitPage } from './app.po';

describe('init App', function() {
  let page: InitPage;

  beforeEach(() => {
    page = new InitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
