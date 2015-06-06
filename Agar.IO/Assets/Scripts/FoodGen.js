#pragma strict

public var foodGameObjectAmount : int;
public var foodSprite : Sprite;
public var foodParent : Transform;
public var minPosition : Vector2;
public var maxPosition : Vector2;

private var foodColors : Color32[];
private var foodRotate : Vector2;
private var foodGameObject : GameObject[];



function Start () {

	foodGameObject = new GameObject[foodGameObjectAmount];
	foodColors = new Color32[25];
    foodColors[0]= Color32(7, 255, 78, 255); // Light green
    foodColors[1]= Color32(84, 7, 255, 255); // Light blue
    foodColors[2]= Color32(255, 142, 7, 255); // Bright orange
    foodColors[3]= Color32(7, 243, 255, 255); // Cyan
    foodColors[4]= Color32(228, 7, 255, 255); // Light purple
    foodColors[5]= Color32(124, 7, 255, 255); // Little darker than light blue
    foodColors[6]= Color32(173, 255, 7, 255); // Barf green
    foodColors[8]= Color32(7, 255, 90, 255); // Light barf green
    foodColors[9]= Color32(255, 55, 7, 255); // Orange red
    foodColors[10]= Color32(255, 7, 173, 255); // Pink
    foodColors[11]= Color32(255, 7, 214, 255); // Dark pink
    foodColors[12]= Color32(7, 185, 255, 255); // Dark cyan
    foodColors[13]= Color32(110, 255, 7, 255); // Darker barf green
    foodColors[14]= Color32(191, 255, 7, 255); // Another barf green
    foodColors[15]= Color32(255, 107, 7, 255); // Orange with little red
    foodColors[16]= Color32(142, 7, 255, 255); // Light purple
    foodColors[17]= Color32(205, 7, 255, 255); // Another purple
    foodColors[18]= Color32(7, 156, 255, 255); // Light blue-ish
    foodColors[19]= Color32(254, 255, 7, 255); // Bright yellow
    foodColors[20]= Color32(7, 255, 234, 255); // Bright cyan
    foodColors[21]= Color32(255, 217, 7, 255); // Orange yellow
    foodColors[22]= Color32(7, 255, 66, 255); // Light green
    foodColors[23]= Color32(255, 0, 0, 255); // Red    
    foodColors[24]= Color32(255, 7, 29, 255); // Another red
		
	for (var i = 0; i < foodGameObject.Length; i++) {
    	    var go = GameObject();
        	var randomPosition = Vector2(Random.Range(minPosition.x, maxPosition.x), Random.Range(minPosition.y, maxPosition.y));
        	var randomRotation = Vector2(Random.Range(0, 360), Random.Range(0, 360));
        	var colorNum = Random.Range(0, foodColors.Length);
        	go.transform.localScale = Vector3(0.1,0.1,0.1);
        	go.AddComponent.<PolygonCollider2D>();
        	go.AddComponent.<Rigidbody2D>().gravityScale = 0.0;
         	go.AddComponent.<SpriteRenderer>().sprite = foodSprite;
        	go.GetComponent.<Renderer>().sortingLayerName = "Foreground";
		 	go.GetComponent.<Renderer>().sortingOrder = 2;
			go.name = "Food " + i;
		 	go.transform.parent = foodParent;
			go.GetComponent.<Renderer>().material.color = foodColors[colorNum];
			go.transform.position = randomPosition;
			go.transform.position.z = 2.0;
			go.transform.tag = "food";
         	foodGameObject[i] = go;
			yield WaitForSeconds(0.2);
		}
		ShowHideIndicators(true);
		
}

function Update () {
}
 
 
 function ShowHideIndicators(show : boolean) {
     for (var i = 0; i < foodGameObject.Length; i++) {
         foodGameObject[i].GetComponent.<Renderer>().enabled = show;
     }
 }