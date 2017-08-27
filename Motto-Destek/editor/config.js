/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	
	//config.width = '850'
	//config.resize_minWidth = '850';
	//config.resize_maxWidth = '850';
	config.height = '400'
	config.resize_dir = 'vertical';
	config.autoParagraph = false;
	config.enterMode = CKEDITOR.ENTER_BR;

	config.toolbar = [
						['Source'],
						['Preview'],
						[ 'Styles','Format','Font','FontSize' ],
						['Bold', 'Italic','Underline'],
						['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
						[ 'TextColor','BGColor', 'Table' ]
					]
};