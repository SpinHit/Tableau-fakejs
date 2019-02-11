window.addEventListener("load" , main);
var rects = [];

function main(event){
    //mettre le nombre de rectangles dans i
    var i = 10;
    for (i ; i >0 ; i--){
        var rect = randRect();
            while(hitTestAll(rect)){
                var rect = randRect();
        }
        rects.push(rect);
        factory("div", rect.x, rect.y, rect.w, rect.h);
    }
    console.log(rect);
}

//position au hasard
function randRange(min, max) {
	return Math.floor(Math.random() * (max-min+1)) + min;
}

//couleur au hasard
function randomColor() {
	return "#" + Math.round(Math.random() * 0xFFFFFF).toString(16);
}

//rectangle au hasard
function randRect() {
	return {x: randRange(document.body.clientWidth,0), y: randRange(document.body.clientWidth,0), w: randRange(50, 200), h: randRange(50, 200)}
}
//Un rectangle
function factory(el, x, y, w, h){
	var element = document.createElement(el);
	element.style.position = "absolute";
	element.style.left = x + "px"; // gauche
	element.style.top = y + "px"; // haut
	element.style.width = w + "px"; // droite
	element.style.height = h + "px"; //hauteur
	element.style.backgroundColor = randomColor();
	document.body.appendChild(element);
}
// fonction qui test la collision pour 2 rectangle
function hitTest(r1, r2)
{
    return (((r1.x + r1.w >= r2.x) && (r1.x <= r2.x + r2.w)) && ((r1.y + r1.h >= r2.y) && (r1.y <= r2.y + r2.h)));
}

// fontion qui test la collision pour tous les rectangles
function hitTestAll(rect)
{
    for(var i = 0; i < rects.length; i++)
    {
        if( hitTest(rect, rects[i]) )
        {
            return true;
        }
    }

    return false;
}
