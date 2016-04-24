<?php

namespace CR\Websockets;

/**
* CkmomController
*
*/

class WebsocketsController implements \Anax\DI\IInjectionAware {

    use \Anax\DI\TInjectable;

    public function chatAction() {
        $this->di->theme->setTitle("Chat client");
        $content = $this->fileContent->get('chatclient.html');
        //$content = $this->textFilter->doFilter($content, 'shortcode, markdown');
        $this->views->add('theme/index', ['content' => $content], 'fullpage');
    }

    public function echobroadcastAction() {
        $this->di->theme->setTitle("Echo client");
        $content = $this->fileContent->get('client.html');
        $side = $this->fileContent->get('client-side.md');
        $side = $this->textFilter->doFilter($side, 'shortcode, markdown');

        $this->views->add('theme/index', ['content' => $content], 'main-extended');
        $this->views->add('theme/index', ['content' => $side], 'sidebar-reduced');
    }
}
