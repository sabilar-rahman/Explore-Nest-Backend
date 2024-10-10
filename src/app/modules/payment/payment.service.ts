/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { Booking } from "../booking/bookings.model";
// import { verifyPament } from "./payment.utils";
import { join } from "path";
import { readFileSync } from "fs";
import { verifyPament } from "./payment.utils";
import { Booking } from "../booking/booking.model";

const confirmationService = async (tran_id: string, status: string) => {
  const verifyResponse = await verifyPament(tran_id);
  console.log(verifyResponse);
  let result;
  let message = "";

  if (verifyResponse && verifyResponse.pay_status === "Successful") {
    result = await Booking.findOneAndUpdate(
      { tran_id },
      {
        paymentStatus: "Paid",
      }
    );
    message = "Successfully Paid!";
  } else {
    message = "Payment Failed!";
  }

  const filePath = join(__dirname, "../../../views/confirmation.html");
  let template = readFileSync(filePath, "utf-8");

  template = template.replace(
    "{{messageText}}",
    message === "Successfully Paid!" ? "Payment Successful" : "Payment Failed"
  );
  template = template.replace(
    "{{icon}}",
    message === "Successfully Paid!" ? "✔️" : "❌"
  );
  template = template.replace(
    "{{iconClass}}",
    message === "Successfully Paid!" ? "success-icon" : "failed-icon"
  );

  return template;
};

export const PaymentServices = {
  confirmationService,
};