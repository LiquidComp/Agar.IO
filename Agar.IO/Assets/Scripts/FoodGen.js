#pragma strict

public var foodGameObjectAmount : int;
public var foodSprite : Sprite;
public var foodParent : Transform;
public var minPosition : Vector2;
public var maxPosition : Vector2;

private var foodColor;
private var foodRotate : Vector2;
private var foodGameObject : GameObject[];

function Start () {

	foodGameObject = new GameObject[foodGameObjectAmount];
	for (var i = 0; i < foodGameObject.Length; i++) {
    	    var go = GameObject();
        	var randomPosition = Vector2(Random.Range(minPosition.x, maxPosition.x), Random.Range(minPosition.y, maxPosition.y));
        	var randomRotation = Vector2(Random.Range(0, 360), Random.Range(0, 360));
        	go.transform.localScale = Vector3(0.1,0.1,0.1);
         	go.AddComponent.<SpriteRenderer>().sprite = foodSprite;
        	go.GetComponent.<Renderer>().sortingLayerName = "Foreground";
		 	go.GetComponent.<Renderer>().sortingOrder = 2;
			go.name = "Food " + i;
		 	go.transform.parent = foodParent;
			go.GetComponent.<Renderer>().material.color = Color.red;
			go.transform.position = randomPosition;
			go.transform.position.z = 2.0;
			// Deze man doet heel erg geak. Ik snap niet waarom die hem samendrukt. Kiek ff of jou dat wel lukt.
			go.transform.localRotation = Quaternion.AngleAxis(35.0, Vector2.up);
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