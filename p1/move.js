
            let p = {
                x:100,
                y: 200
            }

            let col = {
                r : 255,
                g : 0,
                b : 0
            }
            
            function setup(){
                createCanvas(600,500);
                background(0);
            }
    
            function draw(){
                p.x = random(0,width);
                p.y = random(0,height);
                noStroke();
                fill(col.r,col.g,col.b,100);
                ellipse(p.x,p.y,24,24);
            }
    