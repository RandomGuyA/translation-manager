<?php


if(isset($_POST["action"])){
    if($_POST["action"]=="save_file"){

        $path = $_POST['path'];
        $path = str_replace(".php","-welsh.html" ,$path );
        $path_split = explode("/",$path );
        $fileName = "";

        foreach($path_split as $key=>$urlPath){
            if($key>2){
                $fileName .= ($key==3)?"":"/";
                $fileName .= $urlPath;
            }
        }


        $file = fopen($fileName, 'w');

        fwrite($file, "<html>");

        fwrite($file, $_POST['html']);
        fwrite($file, "</html>");

        fclose($file);

    }
}