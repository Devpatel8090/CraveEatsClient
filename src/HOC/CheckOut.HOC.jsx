import React from "react";
import { Route } from "react-router-dom";


// layout
import CheckoutLayout from "../layouts/CheckOut.layout";

function CheckoutLayoutHoc({ component: Component, ...rest }) {
    return (
        <>
            {/* <Route
                {...rest}
                component={(props) => (
                    <CheckoutLayout>
                        <Component {...props} />
                    </CheckoutLayout>
                )}
            /> */}
            <CheckoutLayout>
                <Component {...rest} />
            </CheckoutLayout>
        </>
    );
}

export default CheckoutLayoutHoc;
