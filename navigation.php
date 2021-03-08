<div id="logoholder" class="ease-in mb-3 bg-primary" style="z-index: 1000; " >
    <!-- Desktop Logo -->
    <div  class="desktop-image m-0 pl-3 pt-3 p-3 h-100 z-index-100 position-absolute">
             <a href="<?php echo get_home_url(); ?>">
        <div class="table-container"  style="min-height: 1vh"> 
            <div class="centre-content">
                <img  width="130" src="<?php bloginfo('template_directory'); ?>/assets/images/logo/hwhd-white.svg" />
            </div>
        </div>
            </a>
    </div>


    <!-- Mobile Logo -->
    <div  class="mobile-image m-0 pl-3 pt-3 p-3 h-100 z-index-100 position-absolute">
        <a href="<?php echo get_home_url(); ?>">
            <div class="pt-1"> 
                <img  width="100" src="<?php bloginfo('template_directory'); ?>/assets/images/logo/hwhd-white.svg" />
            </div>
        </a>
    </div>

    <nav class="justify-content-end bg navbar bg-primary navbar-expand-lg navbar-light text-secondary" >
        <p  class="btn mt-2 mr-2 desktop-image rounded mb-1">
            <a class="text-light text-decoration-none" aria-label="cal on 0151 000 0000"  href="tel:0151 000 0000">
                <span> <img width="20px" src="<?php bloginfo('template_directory'); ?>/assets/images/icons/white/phone.svg"> 0151 000 000</span>            
            </a>
        </p> 

            
        <a aria-label="call on 01704 542002"  href="tel:01704 542002">
            <small  class="btn rounded-circle mt-2 mr-2 mb-1 mobile-image text-light">
                <img width="20px" src="<?php bloginfo('template_directory'); ?>/assets/images/icons/white/phone.svg">        
           </small>
        </a>
           

            
        <h2  class="btn rounded-circle mt-2 mr-2 mb-1  font-weight-bold text-primary">
            <a aria-label="visit blazemedia facebook page" href="https://www.facebook.com/">
                <img width="20px" src="<?php bloginfo('template_directory'); ?>/assets/images/icons/white/facebook.svg">
            </a>
        </h2>
            
        <h2  class="btn mt-2 mr-2 mb-1 font-weight-bold rounded-circle">
            <a aria-label="visit listed.digital" href="https://www.linkedin.com/company/pow8r">
              <img width="20px" src="<?php bloginfo('template_directory'); ?>/assets/images/icons/white/instagram.svg">
            </a>
        </h2>
        
        <div aria-label="Open Page Menu" class="mobile-image openmenu btn btn-transparent rounded-circle mt-2 mr-2 mb-1 text-secondary">
            <img width="20px" src="<?php bloginfo('template_directory'); ?>/assets/images/icons/white/menu.svg">
        </div>            
    </nav> 


    <nav class="desktop-image justify-content-end small-nav navbar bg-primary navbar-expand-lg navbar-dark pb-2 desktop-image col-12 pr-4" style="clear: both;">
        <?php wp_nav_menu(array(
            'theme_location' => 'top-menu',
            'menu_class' => 'nav-list-block list-inline mx-auto justify-content-end h-100 mb-0 text-primary d-flex font-weight-bold bg-primary'
        )); ?>
    </nav>

</div>

<div id="navmenu" class="position-fixed top-0 large-nav w-100 closedmenu bg-primary scrollDiv">
         
    <div   class="logomenu closemenu z-index-100">
             
        <div  class="d-flex flex-row-reverse closemenu position-absolute rounded-0 p-3 mb-0" style="width: 100%">
            <button aria-label="close menu" class="btn btn-none text-dark btn btn-none text-light z-index-100">
                <img width="20px" src="<?php bloginfo('template_directory'); ?>/images/menu.svg">
                <span class="d-none">close the menu</span>
            </button>
       </div>

        <div class='container-fluid m-0 p-0'>
            <div class='row'>
                <div id="navMenuTrigger"></div>
                <div class="col-12">
               
                    <div class="full-height-div" style="min-height: 100vh">
                        <div class="table-container position-relative" style="min-height: 100vh">  
            
                            <div class="centre-content" style="overflow: hidden">
                                <div class='container'>
                                    <div class="col-xl-9 col-lg-6 col-md-8 col-12 p-0">
                                        <div class="wp-spacer-sm"></div>
                                        <div class="categories">
                                            <?php wp_nav_menu(array(
                                                 'theme_location' => 'top-menu',
                                                 'menu_class' => 'text-secondary font-weight-bold h-100'
                                            ));?>
                                        </div> 
                                        <div class="wp-spacer-sm"></div> 
                                    </div>
                                    <?php get_template_part( 'template-parts/header/site', 'branding' ); ?>               
                                </div>

 
                                <div class="w-100 position-relative bottom-0 z-index-100">
                                    <div class="container"> 
                                        <div class="row">
                                            <div class="wp-spacer-sm"></div> 
                                            <div class="wp-spacer-sm"></div> 
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
               </div>          
            </div>
        </div>
    </div>
</div>
<div id="navTrigger" class="p-2 mt-5 position-absolute" style="top: 50%"></div>  



<?php /* <div class="h-100 w-100">
  
                   <div  class="logomenu d-flex flex-row-reverse closemenu rounded-0 p-3 mb-0">
                    <button class="btn btn-transparent">
                      <i class="fas fa-times"></i>
                    </button>
                   </div>

                <div class="categories">
                               <div class='container'>
                <?php wp_nav_menu(
            array(
             'theme_location' => 'top-menu',
             'menu_class' => 'list-inline nav-list-block list-inline h-100'
               )
               

            ); ?>
                </div> 
        <?php get_template_part( 'template-parts/header/site', 'branding' ); ?>               
          </div>
        </div> */ ?>