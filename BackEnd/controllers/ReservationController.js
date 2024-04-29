import ErrorHandler from "../middleware/errorMiddleware.js";
import { Reservation } from "../models/ReservationModel.js";

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("Please fill all the fields!", 400));
    }

    try {
        //The create method expects an object containing the data to be inserted into the database,
        await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            date,
            time
        });

        res.status(200).json({
            success: true,
            message: "Reservation sent successfully!"
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(validationErrors.join(', '), 400));
        }
        return next(error);
    }
};
