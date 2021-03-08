<!DOCTYPE html>
<html lang="en" style="margin: 0 !important;">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title><?php echo bloginfo('name'); wp_title(); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

	<?php get_template_part( 'navigation', 'navigatio.php' ); ?> 

</html>