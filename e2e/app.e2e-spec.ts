import { ArodusV3Page } from './app.po';

describe('arodus-v3 App', function() {
  let page: ArodusV3Page;

  beforeEach(() => {
    page = new ArodusV3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
