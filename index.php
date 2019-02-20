<?php
    

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    if($_SERVER['REQUEST_METHOD'] !== 'POST' ){
        echo json_encode(array('status' == false));
        exit;
    }
    $postdata = file_get_contents("php://input");
    $datos = json_decode($postdata,true);

    switch ($datos['funcion']){
        case 'getMenu':
                getMenu($datos);
                break;
        case 'newMenu':
                newMenu($datos);
                break;
        default:
                break;
    }

    function newMenu($datos){
        $query = "SELECT * FROM menu";
        echo json_encode("newphp");
    }


    function getMenu($datos){        
        $sql = "SELECT * FROM menu";
        execQ($sql);
        
    }
    
   function execQ($sql){
          include "connectdb.php";
          $query = mysqli_query($con,$sql);
          $res= array();
          while($re = mysqli_fetch_assoc($query)){
              $res[] = $re;
          }
          echo json_encode($res);
   }

?>