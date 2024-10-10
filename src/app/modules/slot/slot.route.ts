import { Router } from "express";
import { SlotController } from "./slot.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";
 import ValidateRequest from "../../middlewares/ValidateRequest";
 import { updateSlotValidationSchema } from "./slot.validation";
// import auth from "../../middlewares/auth";
// import { USER_ROLE } from "../user/user.constant";


const router = Router();

router.get("/availability", SlotController.getAvailableSlots);
router.post("/selectedSlot", SlotController.createSelectedSlot);
router.get("/selectedSlots", SlotController.getAllSelectedSlots);
router.get("/", auth(USER_ROLE.admin), SlotController.getAllSlots);
router.put(
  "/:id",
  auth(USER_ROLE.admin),
  ValidateRequest(updateSlotValidationSchema),
  SlotController.updateSlot
);

export const slotRoutes = router;
