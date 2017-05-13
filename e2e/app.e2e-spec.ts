import { AnimationsPlaygroundPage } from './app.po';

describe('animations-playground App', () => {
  let page: AnimationsPlaygroundPage;

  beforeEach(() => {
    page = new AnimationsPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
