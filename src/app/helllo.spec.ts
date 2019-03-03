describe('Application Test', () => {
    let match = '';
    let nonmatch = '';
    let matchex = new RegExp(/^Hello/);
    beforeEach(() => {
        match = "HelloWolrd";
        nonmatch = "Hakunamata";

    });

    afterEach(() => {
        match = '';
        nonmatch = '';
    })

    it('Tests for mathcing criteria', () => {
        expect('HelloWolrd').toBe(match);
    })
    it('Tests for Not mathcing criteria', () => {
        expect('HelloWolrd').not.toBe(nonmatch);
    })
    it('Mtahc the first expression', () => {
        expect('Helloisthisgauirav').toMatch(matchex);
    })
});