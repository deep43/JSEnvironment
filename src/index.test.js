/**
 * Created by dhazra on 11/26/2017.
 */
import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe("our first test", ()=>{
    it("should pass", ()=>{
        expect(true).to.equal(true);
    });
});

describe('index.html', ()=>{
    it('should have Hello', (done)=>{
        const index = fs.readFileSync('./src/index.html', 'utf-8');

        jsdom.env(index, (err, window)=>{
            /*const table = window.document.getElementsByTagName('p')[0];
            expect(table).to.equal('My Env');*/
            done();
            window.close();
        })
    })
});