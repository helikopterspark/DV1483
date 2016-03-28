<?php

namespace CR\HTMLForm;

/**
* Anax base class for wrapping sessions.
*
*/
class CFormCCCheckout extends \Mos\HTMLForm\CForm {

    use \Anax\DI\TInjectionaware,
    \Anax\MVC\TRedirectHelpers;

    private $currentYear;

    /**
    * Constructor
    *
    */
    public function __construct() {

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
                'validation' => array('not_empty'),
            ],
            'address' => [
                'type' => 'text',
                'label' => 'Address',
                'required' => true,
                'validation' => array('not_empty')
            ],
            'zip' => [
                'type' => 'text',
                'label' => 'Zip code',
                'required' => true,
                'validation' => array('not_empty')
            ],
            'city' => [
                'type' => 'text',
                'label' => 'City',
                'required' => true,
                'validation' =>array('not_empty')
            ],
            'country' => [
                'type' => 'select',
                'label' => 'Country',
                'options' => array('default' => 'Select country', 'dk' => 'Denmark', 'fi' => 'Finland', 'no' => 'Norway', 'se' => 'Sweden'),
                'validation' => array('not_empty', 'not_equal' => 'default')
            ],
            'cctype' => array(
                'type' => 'select',
                'label' => 'Credit card type',
                'options' => array('default' => 'Select credit card type', 'visa' => 'VISA', 'mastercard' => 'MasterCard', 'eurocard' => 'Eurocard', 'amex' => 'American Express'),
                'validation' => array('not_empty', 'not_equal' => 'default')
            ),
            'ccnumber' => array(
                'type' => 'text',
                'label' => 'Credit card number',
                'validation' => array('not_empty', 'custom_test' => array('message' => 'Invalid credit card number, try 4408 0412 3456 7893 or 4417 1234 5678 9113', 'test' => 'isValidCCNumber')),
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
                //'callback' => [$this, 'callbackSubmit']
                'callback' => function($this) {
                    return true;
                }
            ),
        ]);
    }

    /**
     * Customise the check() method.
     *
     * @param callable $callIfSuccess handler to call if function returns true.
     * @param callable $callIfFail    handler to call if function returns true.
     */
    public function check($callIfSuccess = null, $callIfFail = null)
    {
        //return parent::check([$this, 'callbackSuccess'], [$this, 'callbackFail']);
        return true;
    }

    /**
     * Callback What to do if the form was submitted?
     *
     */
    public function callbackSuccess()
    {
        return true;
    }

    /**
     * Callback What to do if the form was submitted?
     *
     */
    public function callbackFail()
    {
        return false;
    }


// Adapted from Java code at http://www.merriampark.com/anatomycc.htm
// by Andy Frey, onesandzeros.biz
// Checks for valid credit card number using Luhn algorithm
// Source from: http://onesandzeros.biz/notebook/ccvalidation.php
//
// Try the following numbers, they should be valid according to the check:
// 4408 0412 3456 7893
// 4417 1234 5678 9113
//
private function isValidCCNumber( $ccNum ) {
    $digitsOnly = "";
    // Filter out non-digit characters
    for( $i = 0; $i < strlen( $ccNum ); $i++ ) {
        if( is_numeric( substr( $ccNum, $i, 1 ) ) ) {
            $digitsOnly .= substr( $ccNum, $i, 1 );
        }
    }
    // Perform Luhn check
    $sum = 0;
    $digit = 0;
    $addend = 0;
    $timesTwo = false;
    for( $i = strlen( $digitsOnly ) - 1; $i >= 0; $i-- ) {
        $digit = substr( $digitsOnly, $i, 1 );
        if( $timesTwo ) {
            $addend = $digit * 2;
            if( $addend > 9 ) {
                $addend -= 9;
            }
        } else {
            $addend = $digit;
        }
        $sum += $addend;
        $timesTwo = !$timesTwo;
    }
    return $sum % 10 == 0;
}


/*
MII Digit Value Issuer Category
0 ISO/TC 68 and other industry assignments
1 Airlines
2 Airlines and other industry assignments
3 Travel and entertainment
4 Banking and financial
5 Banking and financial
6 Merchandizing and banking
7 Petroleum
8 Telecommunications and other industry assignments
9 National assignment
*/


/*
Issuer  Identifier  Card Number Length
Diner's Club/Carte Blanche  300xxx-305xxx,
36xxxx, 38xxxx  14
American Express  34xxxx, 37xxxx  15
VISA  4xxxxx  13, 16
MasterCard  51xxxx-55xxxx   16
Discover  6011xx  16
*/
}
