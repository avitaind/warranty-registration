import React from 'react';
import Home from './Home';
import Analytics from './Analytics';
import AddProduct from './products/AddProduct';
import Categories from './categories/Categories';
import Products from './products/Products';
import ProductNumber from './categories/number/ProductNumber';
import ProductModel from './categories/pmodel/ProductModel';
import ProductSeries from './categories/series/ProductSeries';
import ProductType from './categories/type/ProductType';
import Settings from './Settings';
import Customer from './customers/Customer';
import Invoice from './customers/Invoice';
import Warranty from './customers/Warranty';


import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";



function Admin() {
    return (
        <div className='container-fluid'>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/admin">
                            <Home />
                        </Route>
                        <Route path="/admin/products">
                            <Products />
                        </Route>
                        <Route path="/admin/add-product">
                            <AddProduct />
                        </Route>
                        <Route path="/admin/product-categories">
                            <Categories />
                        </Route>
                        <Route path="/admin/product-number">
                            <ProductNumber />
                        </Route>
                        <Route path="/admin/product-model">
                            <ProductModel />
                        </Route>
                        <Route path="/admin/product-series">
                            <ProductSeries />
                        </Route>
                        <Route path="/admin/product-type">
                            <ProductType />
                        </Route>
                        <Route path="/admin/analytics">
                            <Analytics />
                        </Route>

                        <Route path="/admin/customers">
                            <Customer />
                        </Route>
                        <Route path="/admin/invoices">
                            <Invoice />
                        </Route>
                        <Route path="/admin/warranty-registered">
                            <Warranty/>
                        </Route>
                        <Route path="/admin/settings">
                            <Settings/>
                        </Route>
                    </Switch>
                </div>

            </Router>
        </div>
    )
}

export default Admin
