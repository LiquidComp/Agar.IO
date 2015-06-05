#pragma strict

function Start () {

}

function Update () {
transform.position = Camera.main.ScreenToWorldPoint( Vector3(Screen.width/2, Screen.height/2, Camera.main.nearClipPlane) );
}