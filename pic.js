function F1()  // rinķi no 18 piem
{ var c=canvas1.getContext("2d");
	c.clearRect(0,0,canvas1.width, canvas1.height);
	c.strokeStyle="green";c.lineWidth=2;//kontura
	c.fillStyle="lime";//aizkrasojums
	
	for(k=1; k<5; k++)
	{   c.beginPath();	
		c.arc(30*k, 60, 10, 10, 0, 2 * Math.PI); 
		c.closePath();
		c.stroke(); 
		c.fill();
	}
	
	
}
function F2()  // kvadrati
{ var c=canvas1.getContext("2d");
	c.clearRect(0,0,canvas1.width, canvas1.height);
	c.strokeStyle="red";c.lineWidth=2;//kontura
	c.fillStyle="purple";//aizkrasojums
	
	//c.fillRect(40,40,40,40);

	//c.strokeRect(20,20,20,20);
	          // x, y, width, height
	
	
	for(x=0; x<5; x++)
		for(y=0; y<5; y++)
	{  
		c.fillRect( 30+70*x,30+70*y, 50, 50);
		c.strokeRect(30+70*x,30+70*y, 50, 50);
	}
	
	
}
function F3()  // šaha gald
{ var c=canvas1.getContext("2d");
	c.clearRect(0,0,canvas1.width, canvas1.height);
	c.strokeStyle="black";
	c.lineWidth=2;//kontura
	c.fillStyle="purple";//aizkrasojums
	
	//c.fillRect(40,40,40,40);

	//c.strokeRect(20,20,20,20);
	          // x, y, width, height
	
	
	for(x=0; x<8; x++)
		for(y=0; y<8; y++)
	{  
		if((x+y)%2==0){
		c.fillStyle="purple";
		
		c.fillRect( 40+60*x,40+60*y, 60, 60);
	
		
		}
		else{ c.fillStyle="orange";
		
		
		
		c.beginPath();
		c.arc( (40+60*x)+30,(40+60*y)+30, 30,0, 2*Math.PI);
		c.stroke();
		console.log("a");
		c.fill(); }
	}
	
}
function F4()  // šaha gald
	{ var c=canvas1.getContext("2d");
		c.clearRect(0,0,canvas1.width, canvas1.height);
		c.strokeStyle="black";
		c.lineWidth=2;//kontura
		c.fillStyle="purple";//aizkrasojums
	
	//c.fillRect(40,40,40,40);

	//c.strokeRect(20,20,20,20);
	          // x, y, width, height
	
	
	for( i=10;i>0; i--)
		
	{  
		c.arc( 400, 400, 40 * i, 0,2*Math.PI);
		c.fill(); 
	}
	
	
	
}
function F6()  // rinķi no 18 piem
{ var c=canvas1.getContext("2d");
	c.clearRect(0,0,canvas1.width, canvas1.height);
	c.lineWidth=2;c.strokeStyle="blue";
	c.strokeRect(50,50,100,100);
	          
	for(k=0; k<11; k++)
		
	{  
		c.strokeStyle="red";
		c.beginPath();
		c.moveTo(50,50);c.lineTo(50+10*k,150);
		c.closePath();
		c.stroke(); 
		
	
		
		c.strokeStyle="green";
		c.beginPath();
		c.moveTo(150,50);c.lineTo(50,50+10*k);
		c.closePath();
		c.stroke(); 
		
		c.strokeStyle="white";
		c.beginPath();
		c.moveTo(150,150);c.lineTo(50+10*k,50);
		c.closePath();
		c.stroke(); 
		
		c.strokeStyle="violet";
		c.beginPath();
		c.moveTo(50,150);c.lineTo(150,50+10*k);
		c.closePath();
		c.stroke(); 
		
		
	}
}
function F5()  // rinķi no 18 piem
{ var c=canvas1.getContext("2d");
	c.clearRect(0,0,canvas1.width, canvas1.height);
	c.lineWidth=2;c.strokeStyle="blue";

	
	

	c.strokeRect(50,50,100,100);
	          
			 
	
	
	for(k=0; k<11; k++)
		
	{  
		c.strokeStyle="red";
		c.beginPath();
		c.moveTo(100,100);c.lineTo(50+10*k,150);
		c.closePath();
		c.stroke(); 
		
	
		
		c.strokeStyle="purple";
		c.beginPath();
		c.moveTo(100,100);c.lineTo(50,50+10*k);
		c.closePath();
		c.stroke(); 
		
		c.strokeStyle="white";
		c.beginPath();
		c.moveTo(100,100);c.lineTo(150,50+10*k);
		c.closePath();
		c.stroke(); 
		
		c.strokeStyle="violet";
		c.beginPath();
		c.moveTo(100,100);c.lineTo(50+10*k,50);
		c.closePath();
		c.stroke(); 
		
		}
}