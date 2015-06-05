#pragma strict
private var mousePosition : Vector3;
public var moveSpeed = 0.1f;
public var Mass = 20.0f;

function Start () {

}

function Update () {
		
		 mousePosition = Input.mousePosition;
         mousePosition = Camera.main.ScreenToWorldPoint(mousePosition);
         transform.position = Vector2.Lerp(transform.position, mousePosition, moveSpeed);
   
		}