export const ImageTypes = {
  IMAGE: 'Image',
  LOGO: 'Logo',
}

export const ShiftTypes = {
  DEFUALT: '12h',
  HALF_TIME: '12h',
  FULL_TIME: '24h',
}

export const AgencyStatesIds = {
  DRAFT: 1,
  PUBLISHED: 2,
  VERIFIED: 3,
  DISABLED: 4,
}

export const ResponseStatus = {
  OK: 200,
  FORBBIDEN: 403,
  BAD_REQUEST: 400,

}

export const AgencyStates = {
  DRAFT: 'Borrador',
  PUBLISHED: 'Publicado',
  VERIFIED: 'Verificado',
  DISABLED: 'Deshabilitado',
}

export const ImageTypesIds = {
  LOGO: 1,
  IMAGE: 2,
}

export const ShiftTypesIds = {
  HALF_TIME: 1,
  FULL_TIME: 2,
}

export const ServicesStates = {
  OLD: 0,
  NEW: 1,
  DELETED: 2,
  UPDATED: 3,
}

export const CoverageStates = {
  OLD: 0,
  NEW: 1,
  DELETED: 2,
}

export const ImageStates = {
  OLD: 0,
  NEW: 1,
  DELETED: 2,
}

export const PaymentCases = {
  SINGLE: 0,
  MULTIPLE: 1,
  MAXIMUMALLOWED: 2,
  SPECIALSERVICES: 3,
}

export const PaymentMethods = {
  SINGLE: 1,
  MULTIPLE: 2,
  BOTH: 3,
  IMPOSSIBLE: 4,
}

export const OrdersLists = {
  PENDING: 1,
  ASSIGNED: 2,
}

export const Languages = {
  ENGLISH: 'en',
  SPANISH: 'es',
}

export const BillPlanPaypal = {
  TYPE: 'fixed',
  PAYMENT_DEFINITIONS: {
    NAME: 'Regular Payment',
    TYPE: 'REGULAR',
    FREQUENCY: 'MONTH',
    FREQUENCY_INTERVAL: '1'
  },
  SETUP_FEE_VALUE: '0',
  CURRENCY: 'USD',
  RETURN_URL: 'http://localhost:3000/paymentDetail',
  CANCEL_URL:'https://www.facebook.com',
  AUTO_BILL_AMOUNT: 'YES' ,
  INITIAL_FAIL_AMOUNT_ACTION: 'CONTINUE',
  MAX_FAIL_ATTEMPTS: '3',
  PAYMENT_METHOD: 'paypal',
}
