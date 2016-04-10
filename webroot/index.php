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
    $app->views->add('theme/index', ['content' => '<h3>Porträtt i 8 bitar</h3>
    <img class="clickable" src="img/helikopterspark.jpg" alt="helikopterspark" />'], 'sidebar');

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
* checkout
*
*/
$app->router->add('kmom', function() use ($app) {
    $app->dispatcher->forward([
        'controller' => 'ckmom',
        'action' => 'index'
    ]);
});

/**
* plugin
*
*/
$app->router->add('plugin', function() use ($app) {
    $filenameArray = [];
    $picArray = '';

    $handle = opendir(dirname(realpath(__FILE__)).'/../webroot/img/gallery/');
    while($file = readdir($handle)){
        if($file !== '.' && $file !== '..'){
            array_push($filenameArray, "../webroot/img/gallery/$file");
        }
    }
    closedir($handle);
    foreach ($filenameArray as $value) {
        $picArray .= $value.",";
    }
    $app->theme->setTitle("Gallery and Lightbox jQuery plugin");
    $app->theme->addClassAttributeFor('html', 'dark-theme');

    $app->views->add('dv1483/plugin-page', ['picArray' => $picArray], 'fullpage');

});

/**
* Shop
*
*/
$app->router->add('shop', function() use ($app) {
    $app->dispatcher->forward([
        'controller' => 'shop',
        'action' => 'index'
    ]);
});

/**
* checkout
*
*/
$app->router->add('checkout', function() use ($app) {
    $app->dispatcher->forward([
        'controller' => 'checkout',
        'action' => 'index'
    ]);
});

/**
* Game
*
*/
$app->router->add('game', function() use ($app) {
    $app->theme->setTitle("The Asteroids Near Uranus");
    $app->theme->addClassAttributeFor('html', 'dark-theme');
    $content = $app->fileContent->get('asteroids.html');
    $app->views->add('theme/index', ['content' => $content], 'fullpage');
});

/**
* About page
*
*/
$app->router->add('helloworld', function() use($app) {
    $content = $app->fileContent->get('helloworld.html');
    $side = $app->fileContent->get('playground1.md');
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
