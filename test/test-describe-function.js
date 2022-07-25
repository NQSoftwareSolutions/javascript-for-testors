// mocha
// mocha describe function is take two parameters
// first type of test
// second function which cintains test
// a single describe function can contains a suit of tests of same type
// for individual test we will "it" function
// which also takes two parameters
// first parameter is the name of the test
// second parameter is the function which contains body of the test
// we can use arrow functions but it causes issue in some cases so aviod it here

//chai
// chai provide three different assertion styles
// should: Should is a BDD style
// expect: excpect is a BDD style
// assert: assert is TDD style

//how to run
// use npx
//example: npx mocha

//some keywords
//skip : it will use for skipping any test or any suit of test
//only : it used to execute only that test or suit


// hooks
// Hooks are usefull for applying some pre conditions and clean ups
// before : Run  once before first test case in block
// after : Run once after last test cases in block
// beforeEach : Run before every test case in block
// afterEach : Run after all test case in block

const chai = require ('chai')
, assert = chai.assert
, expect = chai.expect
, should = chai.should()




const { describe, it } = require("mocha");

describe.only ("string", function () {

    before (function(){
        console.log("Before Hook")
    })
    
    after (function(){
        console.log("After Hook")
    })
    
    beforeEach (function(){
        console.log("Before Each Hook")
    })
    
    afterEach (function(){
        console.log("After Each Hook")
    })

    let name = "Abdul"
    it ("Should be string", function () {
        name.should.be.a('string')
        expect(name).to.be.a('string')
        assert.typeOf(name, 'string')
       })

    it ("Should be Abdul", function () {
        name.should.equal('Abdul')
        expect(name).to.equal('Abdul')
        assert.equal(name, 'Abdul')
    })

    it ("Should be Abdul", function () {
        name.should.equal('Abdul')
        expect(name).to.equal('Abdul')
        assert.equal(name, 'Abdul')
    })
})
 
// only will execute only this suit
// describe.only("string", function () {
//     let name = "Abdul"
//     it ("Should be string", function () {
//         name.should.be.a('string')
//         expect(name).to.be.a('string')
//         assert.typeOf(name, 'string')
//        })

//     // skip used to skip any test
//     it.skip ("Should be Abdul", function () {
//     name.should.equal('Abdul')
//     expect(name).to.equal('Abdul')
//     assert.equal(name, 'Abdul')
//     })

//     // only used to run only that case
//     it.only ("Should be Abdul", function () {
//         name.should.equal('Abdul')
//         expect(name).to.equal('Abdul')
//         assert.equal(name, 'Abdul')
//     })
// })

// skip will skip this suit of test cases
describe.skip("string", function () {
    let name = "Abdul"
    it ("Should be string", function () {
        name.should.be.a('string')
        expect(name).to.be.a('string')
        assert.typeOf(name, 'string')
       })

    // skip used to skip any test
    it.skip ("Should be Abdul", function () {
    name.should.equal('Abdul')
    expect(name).to.equal('Abdul')
    assert.equal(name, 'Abdul')
    })

    // only used to run only that case
    it.only ("Should be Abdul", function () {
        name.should.equal('Abdul')
        expect(name).to.equal('Abdul')
        assert.equal(name, 'Abdul')
    })
})