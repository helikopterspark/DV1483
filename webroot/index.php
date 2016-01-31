<?php
/**
* This is a Anax pagecontroller.
*
*/
//require __DIR__.'/config_with_app.php';
require __DIR__.'/config_with_app_DV1483.php';

$app->url->setUrlType(\Anax\Url\CUrl::URL_CLEAN);
$app->navbar->configure(ANAX_APP_PATH . 'config/navbar_dv1483.php');
$app->theme->configure(ANAX_APP_PATH . 'config/theme-grid.php');

/**
* Start page
*
*/
$app->router->add('', function() use ($app) {
    $app->theme->setTitle("JavaScript");
    $content = $app->fileContent->get('frontpage.md');
    $content = $app->textFilter->doFilter($content, 'shortcode, markdown');

    $byline = $app->fileContent->get('byline.html');

   $pagecontent = $content . $byline;

    $app->views->add('theme/index', ['content' => $pagecontent], 'main');
    $app->views->add('theme/index', ['content' => '<h3>Porträtt i 8 bitar</h3><img src="img/helikopterspark.jpg" alt="helikopterspark" />'], 'sidebar');

});

/**
  * Reports
  *
  */
 $app->router->add('report', function() use ($app) {
 	$app->theme->setTitle("Redovisning");
 	$content = $app->fileContent->get('report.md');
 	$content = $app->textFilter->doFilter($content, 'shortcode, markdown');
    $byline = $app->fileContent->get('byline.html');
    $pagecontent = $content . $byline;
  $app->views->add('theme/index', ['content' => $pagecontent], 'main-extended');

});

/**
  * Playground
  *
  */
 $app->router->add('playground', function() use ($app) {
 	$app->theme->setTitle("Lekplats");
    $baddie = $app->fileContent->get('baddie.html');
 	$content = $app->fileContent->get('playground.md');
 	$content = $app->textFilter->doFilter($content, 'shortcode, markdown');

  $app->views->add('theme/index', ['content' => $baddie], 'main-extended');
  $app->views->add('theme/index', ['content' => $content], 'sidebar-reduced');

});

/**
* About page
*
*/
$app->router->add('helloworld', function() use($app) {
    $content = $app->fileContent->get('helloworld.html');
    $side = $app->fileContent->get('playground.md');
 	$side = $app->textFilter->doFilter($side, 'shortcode, markdown');
    $app->theme->setTitle("Hello World!");

    $app->views->add('theme/index', [
        'content' => $content,
    ], 'main-extended');
    $app->views->add('theme/index', ['content' => $side], 'sidebar-reduced');
});

/**
* Source code
*
*/
$app->router->add('source', function() use ($app) {
    $app->theme->addStylesheet('css/source.css');
    $app->theme->setTitle("Source code");

    $source = new \Mos\Source\CSource([
        'secure_dir' => '..',
        'base_dir' => '..',
        'add_ignore' => ['.htaccess'],
    ]);

    $app->views->add('theme/index', [
        'content' => $source->View(),
    ], 'fullpage');
});

$app->router->handle();
$app->theme->render();
