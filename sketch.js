


function setup()
{
	createCanvas(1024, 576);
	
	

	tree = {
		posX : 820,
		Size : 1.5,
		hight : 3
	}

	cloud = {
		posX : 180 ,
		posY : 100 ,
		scale : 1.2
	}
}

function draw()
{
	//fill the sky blue
	background(48,25,52); 



	//1. a CLOUD in the SKY
	//... add your code here
	noStroke();
	fill(255);
	ellipse(cloud.posX,
			cloud.posY,
			60*cloud.scale);
	ellipse(cloud.posX+30*cloud.scale,
			cloud.posY - 10,
			60*cloud.scale,
			80*cloud.scale);
	ellipse(cloud.posX+60*cloud.scale,
			cloud.posY -5 ,
			50*cloud.scale,
			60*cloud.scale);
	ellipse(cloud.posX+90*cloud.scale,
			cloud.posY,
			50*cloud.scale);



	//2. a MOUNTAIN in the distance
	//... add your code here
	noStroke();
	fill(121,99,66);
	triangle(550,256,450,432,650,432);
	fill(255);
	triangle(550,256,497,350,603,350);

	
	
	//3. a TREE
	//... add your code here
	noStroke();
	fill(128,113,83);
	ellipse(tree.posX,
			410,
			40*tree.Size,
			125*tree.hight);
	fill(58, 95, 11 );
	ellipse(tree.posX-40,
			317-10*tree.hight,
			70*tree.Size);
	ellipse(tree.posX,
			340-10*tree.hight,
			70*tree.Size);
	ellipse(tree.posX+40,
			317-10*tree.hight,
			70*tree.Size);
	ellipse(tree.posX,
			290-10*tree.hight,
			70*tree.Size);



	//draw some GREEN GROUND
	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); 



	//4. a CANYON
	//NB. the canyon should go from ground-level to the bottom of the screen
	//... add your code here
	noStroke();
	fill(154,101,80);
	beginShape();
	vertex(100,432);
	vertex(140,460);
	vertex(100,575);
	vertex(200,575);
	vertex(240,460);
	vertex(200,432);
	endShape();
	fill(255,0,0);
	beginShape();
	vertex(100,575);
	vertex(115,560);
	vertex(130,575);
	vertex(145,560);
	vertex(160,575);
	vertex(175,560);
	vertex(190,575);
	endShape();




	//5. a COLLECTABLE TOKEN - eg. a jewel, fruit, coins
	//... add your code here
	strokeWeight(2);
	stroke(0,255,0);
	line(403,375,407,360);
	noStroke();
	fill(255,0,0);
	ellipse(400,380,15,20);
	ellipse(407,380,15,20);



	//   //MOON//    //
	noStroke();
	fill(169,169,169);
	ellipse(800,100,80);
	
}
