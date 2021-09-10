/*
Jest doesn't properly support ECMAScript Modules import/export yet (I tried
following their directions, but couldn't make it work), so I will either have to
wait or find another testing framework.

So far the plan was to implement Puppeteer with Jest, as seen in the following
Academind video:
https://www.youtube.com/watch?v=r9HdJ8P6GQI&ab_channel=Academind

But I don't know if Puppeteer works without Jest. More research needed.
*/

/*
2nd attempt to test using Cypress.
Seems to work, but requires all tests to be organized within the
cypress/integration folder, which is not optimal.

Uses Mocha and Chai Assertion, documentation here:
https://www.chaijs.com/api/bdd/

Remember the following blog post for organizing React data hooks for E2E testing:
https://sendgrid.com/blog/ideas-for-configuring-organizing-and-consolidating-your-cypress-tests-frontendtwiliosendgrid/
*/

describe('My First Test', () => {
    it('should succeed', () => {
        expect(true).to.be.true;
    });
    it('should fail on purpose', () => {
        expect(true).to.be.false;
    });
});