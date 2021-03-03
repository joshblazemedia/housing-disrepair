<?php

// function load_stylesheets()
// {
//        wp_register_style('custom', get_template_directory_uri() . '/assets/css/style.min.css', array(), false, 'all');
//     wp_enqueue_style('custom');
    
    
// }


// add_action('wp_enqueue_scripts', 'load_stylesheets');

function add_theme_scripts() {
	wp_enqueue_style( 'custom', get_template_directory_uri() . '/assets/css/style.min.css' );
}
add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );


// function smartwp_remove_wp_block_library_css(){
//  //wp_dequeue_style( 'wp-block-library' );
//  wp_dequeue_style( 'wp-block-library-theme' );
//  wp_dequeue_style( 'wc-block-style' );
//  //wp_dequeue_style( 'custom' );
// }
// add_action( 'wp_enqueue_scripts', 'smartwp_remove_wp_block_library_css', 100 );


// function load_js()
// {

//     wp_register_script('scriptjs', get_template_directory_uri() . '/assets/js/script.min.js', '', 1, true);
// 	wp_enqueue_script( 'scrollscript', get_template_directory_uri() . '/assets/js/scrollScript.min.js', array(), false, true );
//     wp_enqueue_script('scriptjs');

// }

// add_action('wp_enqueue_scripts', 'load_js');


// register_nav_menus(
//     array(
     
//         'top-menu' => __('Top Menu', 'theme'),
//         'footer-menu' => __('Footer Menu', 'theme'),
        
//        )
// );