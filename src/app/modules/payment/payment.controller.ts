import { Request, Response } from "express";
import { PaymentServices } from "./payment.service";

const confirmationController = async (req: Request, res: Response) => {
  const { tran_id, status ,paidStatus} = req.query;
  const result = await PaymentServices.confirmationService(
    tran_id as string,
    status as string,
    paidStatus as string,
  );
  res.send(result);
};

export const PaymentController = {
  confirmationController,
};