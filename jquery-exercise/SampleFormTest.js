/**
 * Created by ceciliachalar on 9/29/2015.
 */
myFormTest = new SampleFormTest();
myFormTest.validateAllFieldsAreRequired();
this.validateAllFieldsAreRequired= function(){

    var setFullName = function(){
        $('input[name="fullname"]').val('Ceci Test');
    };

    var setEmail = function(){
        $('input[name="email"]').val('email@dominio.com');
    };
    var Gender = function(){
        $('input[name="genderF"]').attr('checked', true);
    };

    var setHobbies = function(){
        //select skiing and running
        $('input#hobby1').attr('checked', true);
        $('input#hobby2').attr('checked', true);
    };

    var chooseHeard = function(){
        $('select#heard').val('mouth');
    };

    var writeMessage = function(){
        $('textarea#message').text('message writed');
    };

    var clickButton = function(){
        $('span.btn.btn-default').click();
    };
};