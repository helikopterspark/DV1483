<?php
/**
 * Extended class to handle easy change of themes, creation of forms, database service etc.
 */
namespace CR\DI;

class CDIFactoryExtended extends \Anax\DI\CDIFactoryDefault
{
       /**
         * Construct.
         *
         */
       public function __construct()
       {
       	parent::__construct();

       	$this->setShared('theme', function () {
       		$themeEngine = new \CR\ThemeEngine\CThemeExtended();
       		$themeEngine->setDI($this);
       		$themeEngine->configure(ANAX_APP_PATH . 'config/theme-grid.php');
       		return $themeEngine;
       	});

        // Forms service
        $this->set('form', '\Mos\HTMLForm\CForm');

        // Database service for Anax
        $this->setShared('db', function () {
          $db = new \Mos\Database\CDatabaseBasic();
          $db->setOptions(require ANAX_APP_PATH . 'config/config_mysql_wgtotw.php');
          $db->connect();
          return $db;
        });

        // Flash messages
        $this->setShared('flashmessage', function() {
          $flashmessages = new \helikopterspark\FlashMsg\FlashMsg();
          $flashmessages->setDI($this);
          return $flashmessages;
        });

      // Paginator
      $this->setShared('paginator', function() {
          $paginate = new \CR\Paginator\CPaginator();
          $paginate->setDI($this);
          return $paginate;
      });

      // Topbar
      $this->setShared('topbar', function () {
          $topbar = new \CR\Topbar\CTopbar();
          $topbar->setDI($this);
          //$topbar->configure(ANAX_APP_PATH . 'config/navbar.php');
          return $topbar;
      });

      // Shop
      $this->setShared('ShopController', function() {
          $shop = new \CR\JSShop\ShopController();
          $shop->setDI($this);
          return $shop;
      });

      // Checkout
      $this->setShared('CheckoutController', function() {
          $checkout = new \CR\JSShop\CheckoutController();
          $checkout->setDI($this);
          return $checkout;
      });

      // Playgrounds
      $this->setShared('CkmomController', function() {
          $kmom = new \CR\CKmom\CkmomController();
          $kmom->setDI($this);
          return $kmom;
      });

      // Websockets
      $this->setShared('WebsocketsController', function() {
          $ws = new \CR\Websockets\WebsocketsController();
          $ws->setDI($this);
          return $ws;
      });

      }

    }
