 private var thisTransform : Transform;
 private var velocity : Vector2;
 
 var centerBlock : Transform;
 var smoothTime = 0.3;
 var xOffset : float = 1.0;
 var yOffset : float = 1.0;
  
 
 
 function Start()
 {
        thisTransform = transform;
 }
 
 function LateUpdate()
 {
        thisTransform.position.x = Mathf.Lerp( thisTransform.position.x, centerBlock.position.x + xOffset, Time.deltaTime * smoothTime);
 
        thisTransform.position.y = Mathf.Lerp( thisTransform.position.y, centerBlock.position.y + yOffset, Time.deltaTime * smoothTime);
 }
 
function OnCollisionEnter2D(coll: Collision2D) {
Debug.Log("done");	
if (coll.gameObject.tag == "food")
	Destroy(coll.gameObject);
//		Debug.Log("done");
}
