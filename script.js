let Fund = document.getElementById('FundAmount')
let Interest = document.getElementById('Interest')
let Years = document.getElementById('Years')
let Payment = document.getElementById('payment')
let result = document.getElementById('result')
let isok = document.getElementById('isok')

function calc() 
{
    result.value = Number(Fund.value) * (1 + (Number(Interest.value/100))) / (Number(Years.value)*12 )
    result.innerHTML = result.value
    if (Payment.value < result.value)
    {
        isok.innerHTML ="High amount, try to reduce the fund or increase the period ";
    }
    else
    {
        isok.innerHTML ="The amount is low, you can pay it";
    }
}

function checkinput(event)
{
    let value=Number(event.target.value)
    if(isNaN(value)) 
    {
    Fund.style.border='2px solid red'
    document.getElementById('ErrorFundAmount').innerHTML="Only numbers can be entered"

    }
    else
    {
        Fund.style.border=''
        document.getElementById('ErrorFundAmount').innerHTML=" "
      
    }

}
Fund.addEventListener(
    'change',checkinput
)

function checkinput1(event)
{
    let value=Number(event.target.value)
    if(isNaN(value)) 
    {
        Interest.style.border='2px solid red'
    document.getElementById('ErrorInterest').innerHTML="Only numbers can be entered"

    }
    else
    {
        Interest.style.border=''
        document.getElementById('ErrorInterest').innerHTML=" "
      
    }

}
Interest.addEventListener(
    'change',checkinput1
)

function checkinput2(event)
{
    let value=Number(event.target.value)
    if(isNaN(value)) 
    {
        Years.style.border='2px solid red'
    document.getElementById('ErrorYears').innerHTML="Only numbers can be entered"

    }
    else
    {
        Years.style.border=''
        document.getElementById('ErrorYears').innerHTML=" "
      
    }

}
Years.addEventListener(
    'change',checkinput2
)

function checkinput3(event)
{
    let value=Number(event.target.value)
    if(isNaN(value)) 
    {
        payment.style.border='2px solid red'
    document.getElementById('Errorpayment').innerHTML="Only numbers can be entered"

    }
    else
    {
        payment.style.border=''
        document.getElementById('Errorpayment').innerHTML=" "
      
    }

}
payment.addEventListener(
    'change',checkinput3
)