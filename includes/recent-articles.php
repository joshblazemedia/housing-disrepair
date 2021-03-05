<div class='container'> 
     <div class="wp-spacer-md"></div>
<div class='card-columns'> 
<?php $the_query = new WP_Query( 'posts_per_page=12' ); ?>
<?php while ($the_query -> have_posts()) : $the_query -> the_post(); ?>

    <div class="card border-content">
    <div class='text-primary  p-4 well' > 
               <a class="childWrapper mb-4" href="<?php the_permalink(); ?>">    
                  <h4  class='text-dark'><?php the_title(); ?></h4>
            
                      <?php if ( has_post_thumbnail() ): ?>
                  <?php // $url = the_post_thumbnail( 'large' ); 
                   $featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full'); 
                   ?>
                   <div class="w-100 position-relative mb-3" style="height:400px; overflow: hidden;">
                        <div class="position-absolute bg-content top-0 left-0 m-0" style="background: 
url('<?php echo $featured_img_url ?>'); background-repeat: no-repeat;
  background-size: cover; height: 100%; width: 100%; overflow: hidden; opacity: 0.8; filter: brightness(0.9) blur(0px); top: 0px; background-position: center">

        </div>
                   </div>
                   
              <?php endif; ?>
               
               <div class="mb-3">
                  <p class='text-dark'><?php   $content = get_the_content();
       echo wp_trim_words( $content , '50' );       
        ?></p>
              <small class="mb-0 text-dark">Read More</small>
              
  
          </div>
                    </a>
            <div class="mt-4">
                 <a class="text-dark" href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>" rel="author">
                     <div class="rounded-circle text-dark float-left mr-2" style="width: 30px; height: 30px; overflow:hidden"><?php echo get_avatar( get_the_author_meta( 'ID' ), 32 ); ?></div></a>
                                            <small class="rpwe-author text-primary"><a class="text-secondary" href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>" rel="author"><?php echo get_the_author_meta( 'first_name').' '.get_the_author_meta( 'last_name'); ?></a> | <a class="text-primary" href="<?php echo get_day_link(get_post_time('Y'), get_post_time('m'), get_post_time('j'));  ?>" rel="author"><?php echo get_the_date(); ?></a></small>
            
        
     </div>
</div>
    </div>
    <?php 
    endwhile;
    wp_reset_postdata();
?>

</div>
        <div class="wp-spacer-md"></div> 
    </div>
