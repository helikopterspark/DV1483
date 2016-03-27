<?php

namespace CR\JSShop;

/**
* ShopController
*
*/

class CheckoutController implements \Anax\DI\IInjectionAware {

    use \Anax\DI\TInjectable;

    private $cart;

    /**
    * Initialize the controller.
    *
    * @return void
    */
    public function initialize() {

        $this->form = new \CR\HTMLForm\CFormCCCheckout();
        $this->form->setDI($this->di);
    }

    public function indexAction() {
        $this->di->theme->setTitle("The JS Shop Checkout");

        //$this->form->check();

        $ccform = $this->form->getHTML(['id' => 'form1', 'columns' => 2]);
        $this->views->add('dv1483/checkout-page', ['form' => $ccform], 'fullpage');
    }

    public function defaultAction() {
        if ($this->session->has('cart')) {
            $cart = $this->session->get('cart');
            $response = array('sum' => $cart['sum'], 'currency' => $cart['currency']);
        } else {
            $response = array('sum'=>0, 'currency' => null);
        }
        echo json_encode($response);
        exit;
    }

    public function payAction() {

        $_POST['pay'] = true;

        $cart = $this->session->get('cart');
        $sum = $cart['sum'];
        $currency = $cart['sum'];

        $output = "The form is not submitted.";
        $outputClass = 'error';
        $errors = null;

        $status = $this->form->Check();

        if ($status === true) {
            $charge = $currency . $sum;
            $sum = 0;
            //unset($_SESSION['cart']);
            $this->session->set('cart', null);
            $output = "The payment transaction was successful. " . $charge . " has been charged from your credit card.";
            $outputClass = 'success';
        } elseif ($status === false) {
            $output = "The form contains errors.";
            $errors = $this->form->GetValidationErrors();
        }

        echo json_encode(array("output" => $output, "outputClass" => $outputClass, "errors" => $errors, "sum" => $sum, "currency" => $currency));
        exit;
    }

}
