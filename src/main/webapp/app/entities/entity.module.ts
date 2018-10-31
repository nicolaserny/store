import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { StoreInvoiceModule as AccountancyInvoiceModule } from './accountancy/invoice/invoice.module';
import { StoreShipmentModule as AccountancyShipmentModule } from './accountancy/shipment/shipment.module';
import { StoreProductModule as CrmProductModule } from './crm/product/product.module';
import { StoreCustomerModule as CrmCustomerModule } from './crm/customer/customer.module';
import { StoreProductOrderModule as CrmProductOrderModule } from './crm/product-order/product-order.module';
import { StoreOrderItemModule as CrmOrderItemModule } from './crm/order-item/order-item.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        AccountancyInvoiceModule,
        AccountancyShipmentModule,
        CrmProductModule,
        CrmCustomerModule,
        CrmProductOrderModule,
        CrmOrderItemModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreEntityModule {}
