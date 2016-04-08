<?php

namespace CR\CKmom;

/**
* CkmomController
*
*/

class CkmomController implements \Anax\DI\IInjectionAware {

    use \Anax\DI\TInjectable;

    public function indexAction() {
        $this->di->theme->setTitle("Playgrounds");
        $content = $this->fileContent->get('playgroundspage.md');
        $content = $this->textFilter->doFilter($content, 'shortcode, markdown');
        $this->views->add('theme/index', ['content' => $content], 'main-extended');
    }

    public function kmom01Action() {
        $this->theme->setTitle("Lekplats Kmom01");
        $baddie = $this->fileContent->get('baddie.html');
        $content = $this->fileContent->get('playground1.md');
        $content = $this->textFilter->doFilter($content, 'shortcode, markdown');

        $this->views->add('theme/index', ['content' => $baddie], 'main-extended');
        $this->views->add('theme/index', ['content' => $content], 'sidebar-reduced');
    }

    public function kmom02Action() {
        $this->theme->setTitle("Lekplats Kmom02");
        $maze = $this->fileContent->get('kmom02.html');
        $content = $this->fileContent->get('playground2.md');
        $content = $this->textFilter->doFilter($content, 'shortcode, markdown');

        $this->views->add('theme/index', ['content' => $maze], 'main-extended');
        $this->views->add('theme/index', ['content' => $content], 'sidebar-reduced');
    }

    public function kmom03Action() {
        $this->theme->setTitle("Lekplats Kmom03");
        $content = $this->fileContent->get('kmom03.html');
        //$app->theme->addClassAttributeFor('html', 'dark-theme');

        $this->views->add('theme/index', ['content' => $content], 'fullpage');
    }

    public function helloworldAction() {
        $content = $this->fileContent->get('helloworld.html');
        $side = $this->fileContent->get('playground1.md');
        $side = $this->textFilter->doFilter($side, 'shortcode, markdown');
        $this->theme->setTitle("Hello World!");

        $this->views->add('theme/index', [
            'content' => $content,
        ], 'main-extended');
        $this->views->add('theme/index', ['content' => $side], 'sidebar-reduced');
    }

}
