/**
 * External dependencies
 */
import { By } from 'selenium-webdriver';
import { WebDriverHelper as helper } from 'wp-e2e-webdriver';
import { Component } from 'wp-e2e-page-objects';

/**
 * External dependencies
 */

const SELECTOR = By.css( '.cart_totals' );

export default class ComponentCartTotals extends Component {
	constructor( driver, selector = SELECTOR, args = { wait: false, waitMs: 10000 } ) {
		super( driver, selector, args );
	}

	hasSubtotal( amountText ) {

	}

	hasShipping( shippingText ) {

	}

	hasTax( taxText ) {

	}

	hasTotal( totalText ) {

	}
}
