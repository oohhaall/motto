<?php
    include('../src/class.fileuploader.php');
	require_once "../fileread/reader_setup.php";

	// get custom name field
	$customName = isset($_POST['custom_name']) && !empty($_POST['custom_name']) ? $_POST['custom_name'] : null;
	
	// initialize FileUploader
    $FileUploader = new FileUploader('files', array(
        'limit' => null,
        'maxSize' => null,
		'fileMaxSize' => null,
        'extensions' => null,
        'required' => false,
        'uploadDir' => '../uploads/',
        'title' => $customName ? $customName : 'name',
		'replace' => false,
        'listInput' => true,
        'files' => null,
    ));
	
	// call to upload the files
    $data = $FileUploader->upload();
	// export to js

    /*
		Kelime Analizi
    */
    $data["files"]["0"]["words"] = word_count($data["files"]["0"]["file"]);
	/*
		Kelime Analizi
	*/

	echo json_encode($data);
	exit;