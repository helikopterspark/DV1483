<article class="article1">

<h1>The JS Bookshop</h1>
    <div id="shopping-cart">
        <h2><img src="../webroot/img/shop/cart.png" alt="cart" />Shopping cart</h2>
        <div id="cart-content">

        </div>
        <p>
            Items in cart: <span id="cart-quantity">0</span><br />
            Total: <span id="cart-sum">0</span><br />
        </p>
        <form>
            <input id="cart-clear" type="button" name="clear" value="Clear" />
            <input id="cart-checkout" type="button" name="checkout" value="Checkout" />
            <output id="cart-message"></output>
        </form>
    </div>
    <table id="shop-items">
        <thead>
            <tr>
                <th>Cover</th><th>Title</th><th>Price</th><th>Buy it</th>
            </tr>
        </thead>
        <tbody id="shop-items-tbody">
            <!-- Shop items are listed here -->
        </tbody>
    </table>
</article>
