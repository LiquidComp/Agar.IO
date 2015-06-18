#pragma strict
public var moveSpeed = 0.02f;
public var maxStretch = 2.0;
public var centerBlock : Transform;
private var thisTransform : Transform;


//private var spring : SpringJoint2D;
private var tempPlayer : Vector2;
private var mousePosition : Vector3;
private var maxStretchSqr : float;
private var rayToMouse : Ray;
 
function Awake () {
		tempPlayer = transform.position;
		        thisTransform = transform;
}


function Start () {

}

function Update () {
    	Dragging();
//		mousePosition = Input.mousePosition;
//		mousePosition = Camera.main.ScreenToWorldPoint(mousePosition);
		
			
}

function Dragging () {
		var mouseWorldPoint : Vector3 = Camera.main.ScreenToWorldPoint (Input.mousePosition);
		var playerToMouse : Vector2 = mouseWorldPoint - tempPlayer;
		
		if (playerToMouse.sqrMagnitude > maxStretchSqr) {
			rayToMouse.direction = playerToMouse;
			mouseWorldPoint = rayToMouse.GetPoint(maxStretch);
			}
		transform.position = Vector2.Lerp(transform.position, mouseWorldPoint, moveSpeed);
		//rayToMouse.origin = Camera.main.ScreenToWorldPoint( Vector3(Screen.width/2, Screen.height/2, Camera.main.nearClipPlane) );
}