/**
 * Created by ceciliachalar on 9/29/2015.
 */

var Biography = function(){

};

Biography.prototype.getBio = function(name,age){
    if(name===undefined||age === undefined)
        return 'Need name and age to provide a biography'
    if(typeof (age) != 'number'|| age<0)
        return 'invalid age'
    return 'Hi, my name is'+ name + ', I am ' + age + 'years old and I am a nice guy';
};
module.exports = Biography;

