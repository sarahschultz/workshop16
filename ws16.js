// Workshop 16
//create the logic for their checkout system that returns the total cost of all refills including if the customer has a subscription and/or a coupon.
    //If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
    // If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
    // At the end of the script, you should return and log the string "Your grand total is ${finalAmount}."

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// The returns of these functions should be stored in a variable, allowing other functions to use the result.
//Expected Results:
    // Timmy => "Your grand total is $65"
    // Sarah => "Your grand total is $37.5."
    // Rocky => "Your grand total is $102.5"

    function conditionsCheck (object) {
        let subTotal = object.pricePerRefill * object.refills //bags of drugs * pricePerRefill
        let subDiscountAmount = 0.25 //ONLY if subscription = true
        let coupon = 10
    if (object.subscription === true) {
        subTotal = subTotal-(subTotal*subDiscountAmount)
        if (object.coupon === true) {
            subTotal = subTotal - coupon
            return `Your grand total for ${object.prescription} is $ ${subTotal}`
        } else {
            return `Your grand total for ${object.prescription} is $ ${subTotal}`
        }
    } else {
        if(object.coupon===true) {
            subTotal = (subTotal-coupon)
            return `Your grand total for ${object.prescription} is $ ${subTotal}`
        } else {
            return `Your grand total for ${object.prescription} is $ ${subTotal}`
        }
    }
}

console.log(conditionsCheck(timmy))
console.log(conditionsCheck(sarah))
console.log(conditionsCheck(rocky))