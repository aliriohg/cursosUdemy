package com.aliDev.creational.factoryMethod;

import com.aliDev.creational.factoryMethod.impl.CardPayment;
import com.aliDev.creational.factoryMethod.impl.GooglePayment;

public class PaymentFactory {

    public static Payment buildPayment(TypePayment typePayment){
        switch (typePayment){
            case GOOGLEPAY:
                return new GooglePayment();
            case CARD:
            default:
                return new CardPayment();

        }
    }
}
