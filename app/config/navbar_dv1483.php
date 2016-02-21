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
     'playground1'  => [
         'text'  => 'KMOM01',
         'url'   => $this->di->get('url')->create('playground1'),
         'title' => 'Lekplats kmom01'
     ],
     // This is a menu item
     'playground2'  => [
         'text'  => 'KMOM02',
         'url'   => $this->di->get('url')->create('playground2'),
         'title' => 'Lekplats kmom02'
     ],

     'source' => [
         'text'  =>'KÄLLKOD',
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
