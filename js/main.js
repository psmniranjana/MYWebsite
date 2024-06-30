console.log("malee"); //hidden subject

    var studentAge = 23; 
    var studentName = "Tharu";
    var myMarks = 87;
    console.log(studentAge);

    //arithmatic ope

    var val1 = 34;
    var val2 = 16;

    console.log(val1+val2);

    //relational ope

    console.log(val1>val2);

    var isMarried = true //true, false

    var mathsGrade = 'A';

    console.log(isMarried);
    console.log(mathsGrade);

    //flow controllers

    var age = 20;
    var salary = 20000;

    //true, fale , or a statement that generate true or false
    if(age>21){     
        console.log("you are eligible");
    }
    else if(age>18){
        console.log("You are ok");
    }
    else if(age>16){
        console.log("You can't contact parents");
    }
    else{
        console.log("Call police");
    }

    ///

    //AND operator

    if(age>18 && salary<15000){
        console.log("You are eligible for the loan");
    }

     //OR operator

     if(age>18 || salary<15000){
        console.log("You are eligible for the loan 2");
    }

    //methods and functions

    //how to get data from text input
    function saveStudent(){
        var name = document.getElementById('stdName').value;
        console.log(name);
    }

    saveStudent(); //calling the function

