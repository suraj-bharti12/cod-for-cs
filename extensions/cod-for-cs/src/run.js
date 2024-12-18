// // ///////////////////////////////////////////////////////

// // // @ts-check

// // // Use JSDoc annotations for type safety
// // /**
// //  * @typedef {import("../generated/api").RunInput} RunInput
// //  * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
// //  */

// // /**
// //  * @type {FunctionRunResult}
// //  */
// // const NO_CHANGES = {
// //   operations: [],
// // };


// // /**
// //  * @param {RunInput} input
// //  * @returns {FunctionRunResult}
// //  */
// // export function run(input) {
// //   const restrictedZipCodes = ["800004", "814154", "800003","800002","814152","560009"];
// //   const shippingZip = input.cart.deliveryGroups[0].deliveryAddress?.zip;
// //   const codMethod = input.paymentMethods?.find(paymentMethod => paymentMethod.name.includes("COD"));

// //   console.log(shippingZip, codMethod?.id);

// //   if (shippingZip && codMethod && restrictedZipCodes.includes(shippingZip)) {
// //     return {
// //       operations: [
// //         {
// //           hide: {
// //             paymentMethodId: codMethod.id,
// //           },
// //         },
// //       ],
// //     };
// //   }

// //   return NO_CHANGES;
// // }



// // @ts-check

// /**
//  * @typedef {import("../generated/api").RunInput} RunInput
//  * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
//  */

// /**
//  * @type {FunctionRunResult}
//  */
// const NO_CHANGES = {
//   operations: [],
// };

// // Define restricted contact information
// const RESTRICTED_EMAIL = ["sagarsuraj98@gmail.com", "suraj.mojito@gmail.com"];

// /**
//  * @param {RunInput} input
//  * @returns {FunctionRunResult}
//  */
// export function run(input) {
//   const buyerIdentity = input.cart.buyerIdentity;
//   const codMethod = input.paymentMethods?.find(paymentMethod => 
//     paymentMethod.name.includes("Cash on Delivery (COD)")
//   );

//   if (!codMethod) {
//     return NO_CHANGES;
//   }

//   // Check contact information (email only)
//   const email = buyerIdentity?.email;

//   console.log("Contact Info - Email:", email);

//   // Compare email with the restricted list (case-insensitive)
//   if (email && RESTRICTED_EMAIL.some(restricted => restricted.toLowerCase() === email.toLowerCase())) {
//     return hideCodePaymentMethod(codMethod.id);
//   }

//   return NO_CHANGES;
// }

// /**
//  * Helper function to hide COD payment method
//  * @param {string} paymentMethodId
//  * @returns {FunctionRunResult}
//  */
// function hideCodePaymentMethod(paymentMethodId) {
//   return {
//     operations: [
//       {
//         hide: {
//           paymentMethodId: paymentMethodId,
//         },
//       },
//     ],
//   };
// }


// // // @ts-check

// // /**
// //  * @typedef {import("../generated/api").RunInput} RunInput
// //  * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
// //  */

// // /**
// //  * @type {FunctionRunResult}
// //  */
// // const NO_CHANGES = {
// //   operations: [],
// // };

// // // Define restricted contact information
// // const RESTRICTED_PHONE = ["8340170683", "8340170682", "8340170681"];

// // /**
// //  * Removes all non-numeric characters from a string
// //  * @param {string} phoneNumber
// //  * @returns {string}
// //  */
// // function normalizePhoneNumber(phoneNumber) {
// //   // Remove +91, spaces, and any other non-numeric characters
// //   const normalized = phoneNumber.replace(/^\+91|[^0-9]/g, '');
// //   console.log('Original phone:', phoneNumber);
// //   console.log('Normalized phone:', normalized);
// //   return normalized;
// // }

// // /**
// //  * @param {RunInput} input
// //  * @returns {FunctionRunResult}
// //  */
// // export function run(input) {
// //   // Log entire input for debugging
// //   console.log('Full input:', JSON.stringify(input, null, 2));

// //   const deliveryAddress = input.cart.deliveryGroups[0]?.deliveryAddress;
// //   const buyerIdentity = input.cart.buyerIdentity;
// //   const codMethod = input.paymentMethods?.find(paymentMethod => 
// //     paymentMethod.name === "Cash on Delivery (COD)" || 
// //     paymentMethod.name === "COD" ||
// //     paymentMethod.name.includes("COD")
// //   );

// //   console.log('Found COD method:', codMethod);

// //   if (!codMethod) {
// //     console.log('No COD payment method found');
// //     return NO_CHANGES;
// //   }

// //   // Check phone number from both possible locations
// //   const phoneFromBuyer = buyerIdentity?.phone;
// //   const phoneFromAddress = deliveryAddress?.phone;
// //   const phone = phoneFromBuyer || phoneFromAddress;

// //   console.log('Phone numbers found:', {
// //     fromBuyer: phoneFromBuyer,
// //     fromAddress: phoneFromAddress
// //   });
  
// //   if (!phone) {
// //     console.log('No phone number found in either location');
// //     return NO_CHANGES;
// //   }

// //   const normalizedPhone = normalizePhoneNumber(phone);
// //   console.log('Comparing phones:', {
// //     normalized: normalizedPhone,
// //     restricted: RESTRICTED_PHONE,
// //     matches: RESTRICTED_PHONE.includes(normalizedPhone),
// //   });

// //   if (RESTRICTED_PHONE.includes(normalizedPhone)) {
// //     console.log('Restricted phone number detected, hiding COD');
// //     return hideCodePaymentMethod(codMethod.id);
// //   }

// //   console.log('Phone number allowed, no changes needed');
// //   return NO_CHANGES;
// // }

// // /**
// //  * Helper function to hide COD payment method
// //  * @param {string} paymentMethodId
// //  * @returns {FunctionRunResult}
// //  */
// // function hideCodePaymentMethod(paymentMethodId) {
// //   const result = {
// //     operations: [
// //       {
// //         hide: {
// //           paymentMethodId: paymentMethodId,
// //         },
// //       },
// //     ],
// //   };
// //   console.log('Returning hide operation:', JSON.stringify(result, null, 2));
// //   return result;
// // }
///////////////////////////////////////////////////////////

// @ts-check

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

/**
 * @type {FunctionRunResult}
 */
const NO_CHANGES = {
  operations: [],
};

// Define restricted areas and COD block logic
const RESTRICTED_ZIP_CODES = ["800004", "814154", "800003", "800002", "814152", "560009"];
const RESTRICTED_EMAIL = ["sagarsuraj98@gmail.com", "suraj.mojito@gmail.com"];
const RESTRICTED_PHONE = ["8340170683", "8340170682", "8340170681"]; // Normalize to compare without +91 prefix
const RESTRICTED_PROVINCES = ["RJ"]; // Assuming "RJ" is the province code for Rajasthan

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */
export function run(input) {
  const cartTotal = input.cart.cost.totalAmount?.amount;
  const buyerIdentity = input.cart.buyerIdentity;
  const deliveryAddress = input.cart.deliveryGroups[0]?.deliveryAddress;
  const codMethod = input.paymentMethods?.find(paymentMethod =>
    paymentMethod.name.includes("Cash on Delivery (COD)")
  );

  // Check if COD method is available
  if (!codMethod) {
    return NO_CHANGES;
  }

  // Check cart total for Rs 3000 or more
  if (cartTotal && cartTotal >= 3000) {
    return hideCodePaymentMethod(codMethod.id);
  }

  // Check for restricted email addresses
  const email = buyerIdentity?.email;
  if (email && RESTRICTED_EMAIL.some(restrictedEmail => restrictedEmail.toLowerCase() === email.toLowerCase())) {
    return hideCodePaymentMethod(codMethod.id);
  }

  // Check for restricted phone numbers
  const phone = normalizePhone(buyerIdentity?.phone || deliveryAddress?.phone);
  if (phone && RESTRICTED_PHONE.includes(phone)) {
    return hideCodePaymentMethod(codMethod.id);
  }

  // Check for restricted zip codes
  const shippingZip = deliveryAddress?.zip;
  if (shippingZip && RESTRICTED_ZIP_CODES.includes(shippingZip)) {
    return hideCodePaymentMethod(codMethod.id);
  }

  // Check for restricted province (e.g., Rajasthan)
  const province = deliveryAddress?.provinceCode;
  if (province && RESTRICTED_PROVINCES.includes(province)) {
    return hideCodePaymentMethod(codMethod.id);
  }

  return NO_CHANGES;
}

/**
 * Normalize phone number to remove +91 prefix
 * @param {string | null | undefined} phone
 * @returns {string | undefined}
 */
function normalizePhone(phone) {
  if (!phone) return undefined; // Handles null, undefined, or empty strings
  // Remove "+91" if it exists at the start of the phone number
  return phone.startsWith("+91") ? phone.slice(3) : phone;
}

/**
 * Helper function to hide COD payment method
 * @param {string} paymentMethodId
 * @returns {FunctionRunResult}
 */
function hideCodePaymentMethod(paymentMethodId) {
  return {
    operations: [
      {
        hide: {
          paymentMethodId: paymentMethodId,
        },
      },
    ],
  };
}
