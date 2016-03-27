<?php

namespace CR\JSShop;

/**
* ShopController
*
*/

class ShopController implements \Anax\DI\IInjectionAware {

    use \Anax\DI\TInjectable;


    private $items;
    private $table;
    private $currency;
    private $cart;
    /**
    * Initialize the controller.
    *
    * @return void
    */
    public function initialize() {
        $this->items = [
            'item1' => ['id' => "1", 'image' => "../webroot/img/shop/javascript-the-definitive-guide.jpg", 'title' => "JavaScript The Definitive Guide", 'price' => 17],
            'item2' => ['id' => "2", 'image' => "../webroot/img/shop/javascript.jpg", 'title' => "JavaScript The Good Parts", 'price' => 19],
            'item3' => ['id' => "3", 'image' => "../webroot/img/shop/jquery.jpg", 'title' => "jQuery Novice to Ninja", 'price' => 23],
            'item4' => ['id' => "4", 'image' => "../webroot/img/shop/pro-html5-programming.jpg", 'title' => 'Pro HTML5 Programming', 'price' => 45]
        ];
        $this->currency = '€';
        $this->cart = null;
        //$cartcontent = null;
        $this->table = '<table><thead><tr><th>Item</th><th>Quantity</th><th>Sum</th></tr></thead><tbody>';
    }

    public function indexAction() {
        $this->di->theme->setTitle("The JS Shop");
        $this->views->add('dv1483/shop-page', ['content' => null], 'fullpage');
    }

    public function getitemsAction() {
        //$cartcontent = $this->getcartcontent();
        //echo json_encode(["items" => $this->items, "output" => $cartcontent['content'], "quantity" => $cartcontent['quantity'], "sum" => $cartcontent['sum'], "currency" => $this->currency]);
        $this->getcartcontent();
        echo json_encode(["items" => $this->items, "output" => $this->cart['content'], "quantity" => $this->cart['quantity'], "sum" => $this->cart['sum'], "currency" => $this->currency]);
        exit;
    }

    public function getcartcontent() {
        if ($this->session->has('cart')) {
            $this->cart = $this->session->get('cart');
        } else {
            $this->cart = ['sum' => 0, 'quantity' => 0, 'currency' => $this->currency, 'items' => [], 'content' => $this->table."<tr><td></td><td>Cart is empty</td><td></td></tr></tbody></table>"];
            $this->session->set('cart', $this->cart);
        }
        //return $cart;
    }

    public function buyAction() {
        $this->getcartcontent();
        $cartcontent = null;
        $id = $_POST['id'];
        foreach ($this->items as $item) {
            if (in_array($id, $item)) {
                $this->cart['sum'] += $item['price'];
                $this->cart['quantity'] += 1;

                if ($this->in_array_r($id, $this->cart['items'])) {
                    for ($i=0; $i < count($this->cart['items']); $i++) {
                        if ($this->cart['items'][$i]['id'] === $id) {
                            $this->cart['items'][$i]['quantity'] += 1;
                            $this->cart['items'][$i]['sum'] += $item['price'];
                        }
                    }
                } else {
                    $this->cart['items'][] = ['id' => $id, 'quantity' => 1, 'sum' => $item['price'], 'title' => $item['title']];
                }
            }
        }

        foreach ($this->cart['items'] as $value) {
            $cartcontent .= '<tr>
            <td>'.$value['title'].'</td>
            <td>'.$value['quantity'].'</td>
            <td>'.$this->currency.$value['sum'].'</td>
            </tr>';
        }
        $this->cart['content'] = $this->table . $cartcontent . '</tbody></table>';
        $this->session->set('cart', $this->cart);

        echo json_encode(array("output" => $this->cart['content'], "quantity" => $this->cart['quantity'], "sum" => $this->cart['sum'], "currency" => $this->cart['currency']));
        exit;
    }

    // Clear cart
    public function clearcartAction() {
        $this->table .= '<tr><td></td><td>Cart is empty</td><td></td></tr></tbody></table>';
        //unset($_SESSION['cart']);
        $this->session->set('cart', null);
        echo json_encode(array("output" => $this->table, "quantity" => 0, "sum" => 0, "currency" => $this->currency));
        exit;
    }

    // Search multidimensional array
    private function in_array_r($item , $array){
        return preg_match('/"'.$item.'"/i' , json_encode($array));
    }

}
