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
/*
        $this->form = new \CR\HTMLForm\CFormCCCheckout();
        $this->form->setDI($this->di);
        */
    }

    public function indexAction() {
        $this->di->theme->setTitle("The JS Shop Checkout");
        //$this->form->check();

        $this->form = new \CR\HTMLForm\CFormCCCheckout();
        $this->form->setDI($this->di);
        //$ccform = $this->form->getHTML(['id' => 'form1', 'columns' => 2]);
        $this->views->add('dv1483/checkout-page', ['form' => $this->form->getHTML(['id' => 'form1', 'columns' => 2])], 'fullpage');
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

        include('cc_form.php'); // for the validation to work, Anax seems to lose the other object
        $_POST['pay'] = true;

        $cart = $this->session->get('cart');
        $sum = $cart['sum'];
        $currency = $cart['currency'];

        $status = $form->check();

        $output = "The form is not submitted.";
        $outputClass = 'error';
        $errors = null;

        if ($status === true) {
            $charge = $currency . $sum;
            $sum = 0;
            $this->session->set('cart', null);
            $output = "The payment transaction was successful. You credit card was charged " . $charge;
            $outputClass = 'success';
        } elseif ($status === false) {
            $output = "The form contains errors.";
            $errors = $form->GetValidationErrors();
        }

        sleep(1);
        echo json_encode(array("output" => $output, "outputClass" => $outputClass, "errors" => $errors, "sum" => $sum, "currency" => $currency));
        exit;
    }

}
