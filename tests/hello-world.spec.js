for (let i = 0; i < 10; i++) {
    describe('when a number is a number', () => {
        it(`the number ${i} is what it is`, () => {
            if (i % 2 == 0) {
                expect(i).toEqual(i);
            } else {
                expect(i).not.toEqual(i)
            }
        })
    })
}