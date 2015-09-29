/**
 * Created by ceciliachalar on 9/29/2015.
 */
var Biography = require('./Biography.js');
require('./Biography.js');
describe('Biography', function(){
    it('it should obtain the the name of the biography', function(){

        var bio = new Biography();
        var actRes = bio.getBio('test1', 12);
        var expRes = 'Hi, my name is'+ 'test1' + ', I am ' + '12' + 'years old and I am a nice guy';
        //validation
        expect(actRes).toEqual(expRes);
    });

    it('should display a messaje a invalid age', function(){
        //steps
        //var name = 'test2';
        //var age = -1;
        var bio = new Biography();
        var actRes = bio.getBio('test2',-1);
        var expRes ='invalid age';
        //validation
        expect(actRes).toEqual(expRes);
    });


    it('should display a messaje for empty name', function(){
        //steps
        var bio = new Biography();
        var actRes = bio.getBio();
        var expRes ='Need name and age to provide a biography';
        //validation
        expect(actRes).toBeDefined(expRes);
    });
});
