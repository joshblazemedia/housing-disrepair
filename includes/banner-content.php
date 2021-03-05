<?php if ( has_post_thumbnail() ){ 
$url = wp_get_attachment_url( get_post_thumbnail_id($post->ID) ); ?>




 <div class="full-height-div position-relative bg-primary" style="min-height: 75vh; overflow: hidden;">
    <div class="table-container" style="min-height: 75vh"> 

                <div class="w-100 h-100 div-overlay-bg" style="opacity: 1"  data-trigger="titleTrigger" data-scroll-speed="+100">
            <div class=" bg-light fade-in position-absolute m-0" style="background: 
<?php  echo 'url('. $url.');' ?> background-repeat: no-repeat; background-size: cover; height: 100%; width: 100%; overflow: hidden; opacity: 0.5; filer: brightness(1) blur(0px); background-positon: center; object-fit: cover;">
</div>
        </div>
        
       <div class=" d-none w-100 h-100 position-absolute opacity-primary bottom-0 z-index-100"></div>
        
        <div class="centre-content">
                  <div class="container">
               <div class="z-index-100">
                          <div class="row">
                   <div class="wp-spacer-sm"></div>
             
                   <div class='col-12 mx-auto text-center'>
                       <div data-trigger="titleTrigger">
                 <div class="" style="top: 0px; z-index: 0; transform: matrix(1, 0, 0, 1, 0, 0);" data-trigger="titleTrigger" data-scroll-speed="-100">
                    <h1 class="mr-1 ml-1 reveal-up font-weight-bold text-light" style="z-index: 100"><?php the_title(); ?></h1>
                </div>
                  
                   </div>
                              </div>
                              
                    <div class='d-none col-md-4 reveal-up col-lg-4 col-12 p-0 z-index-100'>
                   </div>
                   </div>

            </div>
        </div>
               </div>
        </div>
     
     </div>


<?php } else { ?>

 <div class="full-height-div bg-primary position-relative" style="min-height: 50vh; overflow: hidden;">
    <div class="table-container" style="min-height: 50vh;">  
                <div class="w-100 h-100 div-overlay-bg bg-primary" style="opacity: 1">
        </div>
        <div class="centre-content">
                  <div class="container-fluid">
               <div class="position-relative z-index-100">
                   <div class="row">
                   <div class="wp-spacer-xl"></div>
                       <div class="wp-spacer-md"></div>
                   <div class='col-12 mx-auto'>
                       <div class='col-md-10 col-lg-10 col-12 mx-auto'>
                 <div class="" style="top: 0px; z-index: 0; transform: matrix(1, 0, 0, 1, 0, 0);" data-trigger="titleTrigger" data-scroll-speed="+100">
                    <h1 class="mr-1 ml-1 text-light font-weight-bold text-center" style="z-index: 100"><?php the_title(); ?></h1>
                           </div>
                   </div>
                   </div>
                    <div class='d-none col-md-4 reveal-up col-lg-4 col-12 p-0 z-index-100'>
                   </div>
                   </div>
                   <div class="wp-spacer-xl"></div>
            </div>
        </div>
               </div>
        </div>
    <div class="position-absolute left-0 bottom-0 overflow-hidden" style="min-height: 50%; width: 100%; opacity: 1">
                 
            <img height="100%" src="<?php bloginfo('template_directory'); ?>/assets/img/banner/bottom-pink.svg">
              
        
            </div>

     </div>


<?php }?> 