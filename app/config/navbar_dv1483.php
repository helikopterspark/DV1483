<?php
/**
 * Config-file for navigation bar.
 *
 */

 // Check whether user is logged in
 $source = null;
 $login = null;

 $items = [

     // This is a menu item
     'home'  => [
         'text'  => 'HEM',
         'url'   => $this->di->get('url')->create(''),
         'title' => 'Startsidan'
     ],

     // This is a menu item
     'report'  => [
         'text'  => 'REDOVISNING',
         'url'   => $this->di->get('url')->create('report'),
         'title' => 'Redovisning av kursmoment',
         'mark-if-parent-of' => 'report',
     ],

     // This is a menu item
     'kmom'  => [
         'text'  => 'PLAYGROUND &#x25BE;',
         'url'   => $this->di->get('url')->create('kmom'),
         'title' => 'Playground',
         'mark-if-parent-of' => 'kmom',
         // kmom submenu
            'submenu' => [
                'items' => [
                    'kmom01' => [
                        'text'  => 'KMOM01',
                        'url'   => $this->di->get('url')->create('ckmom/kmom01'),
                        'title' => 'Kmom01'
                    ],
                    'kmom02'  => [
                        'text'  => 'KMOM02',
                        'url'   => $this->di->get('url')->create('ckmom/kmom02'),
                        'title' => 'Kmom02'
                    ],
                    'kmom03'  => [
                        'text'  => 'KMOM03',
                        'url'   => $this->di->get('url')->create('ckmom/kmom03'),
                        'title' => 'Kmom03'
                    ],
                ],
            ],
     ],

     // This is a menu item
     'jqryplugin'  => [
         'text'  => 'PLUGIN',
         'url'   => $this->di->get('url')->create('plugin'),
         'title' => 'jQuery plugin'
     ],

     // This is a menu item
     'shop'  => [
         'text'  => 'SHOP',
         'url'   => $this->di->get('url')->create('shop'),
         'title' => 'Shop'
     ],

     // This is a menu item
     'game'  => [
         'text'  => 'GAME',
         'url'   => $this->di->get('url')->create('game'),
         'title' => 'Game'
     ],

     // This is a menu item
     'websockets'  => [
         'text'  => 'CHAT &#x25BE;',
         'url'   => $this->di->get('url')->create('websockets/chat'),
         'title' => 'Chat',
         'mark-if-parent-of' => 'websockets',
         // kmom submenu
            'submenu' => [
                'items' => [
                    'echo' => [
                        'text'  => 'ECHO/BROADCAST',
                        'url'   => $this->di->get('url')->create('websockets/echobroadcast'),
                        'title' => 'Echo'
                    ],
                ],
            ],
     ],

     'source' => [
         'text'  =>'SOURCE',
         'url'   => $this->di->get('url')->create('source'),
         'title' => 'Källkod'
     ],

 ];

return [

    // Use for styling the menu
    'class' => 'navbar',
    // Menu structure comes here
    'items' => $items,


    /**
     * Callback tracing the current selected menu item base on scriptname
     *
     */
    'callback' => function ($url) {
        if ($url == $this->di->get('request')->getCurrentUrl(false)) {
            return true;
        }
    },



    /**
     * Callback to check if current page is a decendant of the menuitem, this check applies for those
     * menuitems that has the setting 'mark-if-parent' set to true.
     *
     */
    'is_parent' => function ($parent) {
        $route = $this->di->get('request')->getRoute();
        return !substr_compare($parent, $route, 0, strlen($parent));
    },



   /**
     * Callback to create the url, if needed, else comment out.
     *
     */
   /*
    'create_url' => function ($url) {
        return $this->di->get('url')->create($url);
    },
    */
];
