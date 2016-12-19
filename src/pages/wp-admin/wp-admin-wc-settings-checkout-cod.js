/**
 * External dependencies
 */
import { By } from 'selenium-webdriver';
import { WebDriverHelper as helper } from 'wp-e2e-webdriver';

/**
 * Internal Dependencies
 */
import WPAdminWCSettings from './wp-admin-wc-settings';

const defaultArgs = {
	url: '',
	visit: true,
};

const ENABLE_SELECTOR = By.css( '#woocommerce_cod_enabled' );

export default class WPAdminWCSettingsCheckoutCOD extends WPAdminWCSettings {
	constructor( driver, args = {} ) {
		args = Object.assign( defaultArgs, args );
		super( driver, args );
	}

	checkEnable() {
		return helper.setCheckbox( this.driver, ENABLE_SELECTOR );
	}

	uncheckEnable() {
		return helper.unsetCheckbox( this.driver, ENABLE_SELECTOR );
	}
}