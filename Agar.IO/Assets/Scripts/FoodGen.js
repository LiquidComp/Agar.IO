#pragma strict

public var foodGameObjectAmount : int;
public var foodSprite : Sprite;
public var foodParent : Transform;
public var minPosition : Vector2;
public var maxPosition : Vector2;

private var foodColors : Color[];
private var foodRotate : Vector2;
private var foodGameObject : GameObject[];



function Start () {

	foodGameObject = new GameObject[foodGameObjectAmount];
	foodColors = new Color[7];
	foodColors[0]= Color.blue;
    foodColors[1]= Color.red;
    foodColors[2]= Color.green;
    foodColors[3]= Color.yellow;
    foodColors[4]= Color.cyan;
    foodColors[5]= Color.magenta;
    foodColors[6]= Color(0.2,0.2,0.2,1);
		
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
			yield WaitForSeconds(0.5);
		}
		ShowHideIndicators(true);
		
}

function Update () {

}
 
 
 function ShowHideIndicators(show : boolean) {
     for (var i = 0; i < foodGameObject.Length; i++) {
         foodGameObject[i].GetComponent.<Renderer>().enabled = show;
         //foodGameObject[i].transform.position = home;
     }
 }