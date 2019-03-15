
function myDeleteFunction() {
	document.getElementById("tab").deleteRow(1);
}

function stopstart(){
	var check1 = document.getElementById("stop/start");
	var check2 = "Stop";
	if(check1.value===check2)
		{
			check1.innerHTML = "Start";
			check1.value="Start";
			check1.style.background='#000000';
		}
		else
			{
				check1.innerHTML = "Stop";
				check1.value="Stop";
			}
}

function arrowswap1(){
	var check1 = document.getElementById("sortpid");
	var check2 = "Sort by ID ↑";
	if(check1.value===check2)
		{
			check1.innerHTML = "Sort by ID ↓";
			check1.value="Sort by ID ↓";
		}
		else
			{
				check1.innerHTML = "Sort by ID ↑";
				check1.value="Sort by ID ↑";
			}
}

function arrowswap2(){
	var check1 = document.getElementById("sortname");
	var check2 = "Sort by Name ↑";
	if(check1.value===check2)
		{
			check1.innerHTML = "Sort by Name ↓";
			check1.value="Sort by ID ↓";
		}
		else
			{
				check1.innerHTML = "Sort by Name ↑";
				check1.value="Sort by Name ↑";
			}
}

function arrowswap3(){
	var check1 = document.getElementById("sortcpu");
	var check2 = "Sort by %CPU ↑";
	if(check1.value===check2)
		{
			check1.innerHTML = "Sort by %CPU ↓";
			check1.value="Sort by %CPU ↓";
		}
		else
			{
				check1.innerHTML = "Sort by %CPU ↑";
				check1.value="Sort by %CPU ↑";
			}
}

function arrowswap4(){
	var check1 = document.getElementById("sortmemory");
	var check2 = "Sort by Memory ↑";
	if(check1.value===check2)
		{
			check1.innerHTML = "Sort by Memory ↓";
			check1.value="Sort by Memory ↓";
		}
		else
			{
				check1.innerHTML = "Sort by Memory ↑";
				check1.value="Sort by Memory ↑";
			}
}

var stop = false;

function stoprefreshing()
{
	stop = !stop;
}


function updatetable()
{
	if(stop===false)
	{
		setTimeout("updatetable()",1000);
		for (var i=0; i<2; i++)
		{
			var table = document.getElementById("tab");
			var rand = Math.random()*10;
			var row = table.insertRow(table.rows.length);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			cell1.innerHTML = "process_id";
			cell2.innerHTML = "process_name";
			cell3.innerHTML = rand + "%";
			cell4.innerHTML = rand + "%";
			cell5.innerHTML = "<button type=\"button\" class=\"btn btn-danger\" onclick=\"myDeleteFunction()\">Kill</button>";

		}
	}
	else{
		setTimeout("updatetable()",100);
	}
	
}

function topscreen(){
	$('html, body').animate({ scrollTop: 0 }, 'slow');
}
function bottomscreen(){
	$('html, body').animate({ scrollBottom: 0 }, 'fast');
}



function cleartextbox()
{
	document.getElementById('processinput').value = "";
}





