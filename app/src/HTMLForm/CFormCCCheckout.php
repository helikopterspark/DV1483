<?php

namespace CR\HTMLForm;

/**
* Anax base class for wrapping sessions.
*
*/
class CFormCCCheckout extends \Mos\HTMLForm\CForm
{
    use \Anax\DI\TInjectionaware,
    \Anax\MVC\TRedirectHelpers;

    private $currentYear;

    /**
    * Constructor
    *
    */
    public function __construct($params = null) {

        $this->currentYear = date("Y");
        parent::__construct([], [
            'payment' => [
                'type' => 'hidden',
                'value' => 10
            ],
            'name' => [
                'type' => 'text',
                'label' => 'Name on credit card:',
                'required' => true,
                'autofocus' => true,
                'validation' => array('not_empty')
            ],
            'address' => [
                'type' => 'text',
                'label' => 'Address',
                'required' => true,
                'validation' => array('not_empty')
            ],
            'zip' => array(
                'type' => 'text',
                'label' => 'Zip code',
                'required' => true,
                'validation' => array('not_empty')
            ),
            'city' => array(
                'type' => 'text',
                'label' => 'City',
                'required' => true,
                'validation' =>array('not_empty')
            ),
            'country' => array(
                'type' => 'select',
                'label' => 'Country',
                'options' => array('default' => 'Select country', 'dk' => 'Denmark', 'fi' => 'Finland', 'no' => 'Norway', 'se' => 'Sweden'),
                'validation' => array('not_empty', 'not_equal' => 'default')
            ),
            'cctype' => array(
                'type' => 'select',
                'label' => 'Credit card type',
                'options' => array('default' => 'Select credit card type', 'visa' => 'VISA', 'mastercard' => 'MasterCard', 'eurocard' => 'Eurocard', 'amex' => 'American Express'),
                'validation' => array('not_empty', 'not_equal' => 'default')
            ),
            'ccnumber' => array(
                'type' => 'text',
                'label' => 'Credit card number',
                'validation' => array('not_empty', 'custom_test' => array('message' => 'Invalid credit card number, try 4408 0412 3456 7893 or 4417 1234 5678 9113', 'test' => 'isValidCCNumber'))
            ),
            'expmonth' => array(
                'type' => 'select',
                'label' => 'Expiration month:',
                'options' => array(
                    'default' => 'Select credit card expiration month...',
                    '01' => 'January',
                    '02' => 'February',
                    '03' => 'March',
                    '04' => 'April',
                    '05' => 'May',
                    '06' => 'June',
                    '07' => 'July',
                    '08' => 'August',
                    '09' => 'September',
                    '10' => 'October',
                    '11' => 'November',
                    '12' => 'December',
                ),
                'validation' => array('not_empty', 'not_equal' => 'default')
            ),
            'expyear' => array(
                'type' => 'select',
                'label' => 'Expiration year:',
                'options' => array(
                    'default' => 'Select credit card expiration year...',
                    $this->currentYear    => $this->currentYear,
                    ++$this->currentYear  => $this->currentYear,
                    ++$this->currentYear  => $this->currentYear,
                    ++$this->currentYear  => $this->currentYear,
                    ++$this->currentYear  => $this->currentYear,
                    ++$this->currentYear  => $this->currentYear,
                ),
                'validation' => array('not_empty', 'not_equal' => 'default')
            ),
            'cvc' => array(
                'type' => 'text',
                'label' => 'CVC:',
                'required' => true,
                'validation' => array('not_empty', 'numeric')
            ),
            'pay' => array(
                'type' => 'submit',
                'value' => 'Perform payment',
                'callback' => function($this) {
                        // Taking some money from the creditcard.
                        return true;
                    }
                ),
            ]);
        }
    }
