function checkAge(age)
{
    if(age>=18)
    {
        console.log('u can do vote')
    }
    else{
        console.log('u cant do vote')
    }
}

checkAge(18)

function checkNumber(number)
{
    if(number>0)
    {
        console.log('no is +ve')
    }
    else if(number<0)
    {
        console.log('no is -ve')
    }
    else
    {
        console.log('no is zero')
    }
}

checkNumber(0)

//nested if else

function checkGrade(score)
{
    let grade
    if(score>=90)
    {
        grade='A'
    }
    else
    {
        if(score>=80)
        {
            grade='B'
        }
        else
        {
            if(score>=70)
            {
                grade='C'
            }
            else
            {
                grade='D'
            }
    
        }
    }

    console.log(grade)
}

checkGrade(90)