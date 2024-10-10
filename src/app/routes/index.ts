import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { ServiceRoutes } from "../modules/service/service.route";
import { slotRoutes } from "../modules/slot/slot.route";
import { bookingRoutes } from "../modules/booking/booking.route";
import { myBookingRoutes } from "../modules/myBooking/myBooking.route";
import { ReviewRoutes } from "../modules/review/review.route";
import { PaymentRoutes } from "../modules/payment/payment.routes";
import { PostRoutes } from "../modules/post/post.route";
import { CommentRoutes } from "../modules/comment/comment.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/",
    route: UserRoutes,
  },
  {
    path: "/services",
    route: ServiceRoutes,
  },

  {
    path: "/slots",
    route: slotRoutes,
  },
  {
    path: "/bookings",
    route: bookingRoutes,
  },
  {
    path: "/my-bookings",
    route: myBookingRoutes,
  },

  {
    path: "/review",
    route: ReviewRoutes,
  },
  {
    path: "/payment",
    route: PaymentRoutes,
  },

  {
    path: '/post',
    route: PostRoutes,
  },

  {
    path: '/comment',
    route: CommentRoutes,
  },

  
 
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
