<?php
    function getListOfPathNamesOfDirectory($DIR){

        $pathnames = array();
        $fileinfos = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator($DIR)
        );
        foreach($fileinfos as $pathname => $fileinfo) {
            if (!$fileinfo->isFile()) continue;
            array_push($pathnames, $pathname);
        }

        return $pathnames;
    }
    function setupDirectory($path){

        $path = str_replace("\\", "/" ,$path );
        $split_paths = explode("/", $path);
        //arrayToString($split_paths);

        $directory = "";

        foreach($split_paths as $key=>$value){
            if($key<count($split_paths)-1 && $key>0){
                $directory .= ($key==1)?"". $value:"-" . $value;
            }
        }

        return $directory;
    }
    function getFileName($path){

        $path = str_replace("\\", "/" ,$path );
        $split_paths = explode("/", $path);
        $fileName = $split_paths[count($split_paths)-1];

        $fileName_split = explode("~", $fileName);

        $file_name = $fileName_split[count($fileName_split)-1];
        return str_replace(".html", ".php", $file_name);

    }

    $rootpath = '../website';
    $pathnames = getListOfPathNamesOfDirectory($rootpath);

    $welsh= array();
    $english = array();
    $added=false;
    foreach($pathnames as $path) {

        if (strpos($path, 'welsh.html') !== false) {
            array_push($welsh, $path);
            $added=true;
        }else{
        
            if($added==false){
                array_push($welsh, "Page Found Found");
            }else{
                $added=false;
            }

            array_push($english, $path);
        }
    }





?>
<html>
<head>
    <link rel="stylesheet" href="../vendors/bootstrap/dist/css/bootstrap.min.css" type="text/css" />
    <link rel="stylesheet" href="../css/style.css" type="text/css" />
</head>
<body>
<div class="container">
    <div class="col-sm-6">
        <h1>English</h1>
        <ul class='a-list' >
            <?php

                foreach($english as $path){

                    echo "<li ><a  href='". $path . "'>".setupDirectory($path)." - ".getFileName($path)."</a></li>";

                }
            ?>
        </ul>
    </div>
    <div class="col-sm-6">
        <h1>Welsh</h1>
        <ul class='a-list' >
            <?php

            foreach($welsh as $path){

                echo "<li ><a href='". $path . "'>".setupDirectory($path)." - ".getFileName($path)."</a></li>";
            }
            ?>
        </ul>
    </div>
</div>
</body>
</html>
