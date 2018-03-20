function SaveExpenses() {
			
	
	var data = [];
    var length=localStorage.length + 1;
    var keys="expenses#"+length;
    data.push( document.forms.expenses.amount.value);
	data.push(document.forms.expenses.date.value);
    data.push(document.forms.expenses.option.value);
	localStorage.setItem(keys, JSON.stringify(data));
	//doShowAll();
    document.forms.expenses.amount.value="";
    document.forms.expenses.date.value="";
    document.forms.expenses.option.value="";
}
function saveChoice()
{
    var choice=document.forms.expenses.choice.value;
    var key="Choice" + (localStorage.length + 1);
    localStorage.setItem(key,choice);
    displayChoice();
}
function saveChoices()
{
    var choice=document.forms.expenses.choice.value;
    var key="Choices" + (localStorage.length + 1);
    localStorage.setItem(key,choice);
    displayChoices();
}
function SaveIncome(){
    var data = [];
    var length=localStorage.length + 1;
    var keys="Income#"+length;
    data.push( document.forms.expenses.amount.value);
	data.push(document.forms.expenses.date.value);
    data.push(document.forms.expenses.option.value);
	localStorage.setItem(keys, JSON.stringify(data));
	//doShowAll();
    document.forms.expenses.amount.value="";
    document.forms.expenses.date.value="";
    document.forms.expenses.option.value="";
}

function ModifyItem() {
	var name = document.forms.ListOfDebt.name.value;
	document.forms.ListOfDebt.data.value= JSON.parse(localStorage.getItem(name))[0];
    document.forms.ListOfDebt.commend.value= JSON.parse(localStorage.getItem(name))[1];
	doShowAll();
}

function RemoveItem() {
	var name = document.forms.ListOfDebt.name.value;
	localStorage.removeItem(name);
	doShowAll();
    	document.forms.ListOfDebt.name.value="";
    document.forms.ListOfDebt.data.value="";
    document.forms.ListOfDebt.commend.value="";
}

function ClearAll() {
	localStorage.clear();
	doShowAll();
}

// dynamically draw the table
function displayChoice()
{
    var x=0;
    var choice="";
    var key="Choice";
    for (x=0;x<=localStorage.length-1;x++)
        {
            key="Choice"
            key+=(x+1);
            if (key!=null)
            choice+="<option>" + localStorage.getItem(key) + "</option>";
        }
    
    document.getElementById('option').innerHTML=choice;
}
function displayChoices()
{
    var x=0;
    var choice="";
    var key="Choices";
    for (x=0;x<=localStorage.length-1;x++)
        {
            key="Choices"
            key+=(x+1);
            if (key!=null)
            choice+="<option>" + localStorage.getItem(key) + "</option>";
        }
    
    document.getElementById('option').innerHTML=choice;
}
function showallExpense()
{
    var key="";
    var i=0;
    var list = "<tr><th>Amount</th><th>Date</th><th>Option</th></tr>\n";
    var income="Income#";
    for(i=0;i<=localStorage.length-1;i++)
        {
            income="Income#"; 
            income+=(i+1);
            key=localStorage.getItem(income);
            if(key!=null){
            list += "<tr>\n<td>"
					+ JSON.parse(localStorage.getItem(income))[0] + "</td>\n<td>" + JSON.parse(localStorage.getItem(income))[1]  + "</td>\n<td>" + JSON.parse(localStorage.getItem(income))[2] +"</td></tr>\n";
        }
   }
    if (list=="<tr><th>Amount</th><th>Date</th><th>Option</th></tr>\n")
        {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }
    document.getElementById('list2').innerHTML=list;
        
}
function showall(){
    var key="";
    var i=0;
    var list = "<tr><th>Amount</th><th>Date</th><th>Option</th></tr>\n";
    var expenses="expenses#";
    var income="income#";
    for(i=0;i<=localStorage.length-1;i++)
        {
            expenses="expenses#"; 
            expenses+=(i+1);
            key=localStorage.getItem(expenses);
            if(key!=null){
            list += "<tr>\n<td>"
					+ JSON.parse(localStorage.getItem(expenses))[0] + "</td>\n<td>" + JSON.parse(localStorage.getItem(expenses))[1]  + "</td>\n<td>" + JSON.parse(localStorage.getItem(expenses))[2] +"</td></tr>\n";
        }
    
        }
    if (list=="<tr><th>Amount</th><th>Date</th><th>Option</th></tr>\n")
        {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }
    document.getElementById('list').innerHTML=list;
        
}
function doShowAll() {
	showall();
    showallExpense();
}
function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}