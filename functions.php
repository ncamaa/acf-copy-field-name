function enque_backoffice_js($hook) {
    wp_enqueue_script( 'backoffice-js', get_template_directory_uri() . '/js/backoffice.js', array(), true );
}

add_action('admin_enqueue_scripts', 'enque_backoffice_js');
