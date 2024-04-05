import ErrorHandler from "../middleware/errorMiddleware";
import { Reservation } from "../models/ReservationModel";

export const sendReservation = async (req,res,next) => {
    const {firstName,lastName,email,phone,date,time} = req.body;
    if(!firstName || !lastName || !email || !phone || !date || !time){
        return next(new ErrorHandler("Please fill all the feilds!",400));
    }

    try{
        await Reservation.create(firstName,lastName,email,phone,date,time);
        res.status(200).json({
            success : true,
            message : "Reservation sent Succesfully!!"
        })
    }catch(error){
        if(error.name === "ValidationError"){
            const validationErrors = Object.values(error.errors).map(
                (err)=>err.message
            );
            return next(new ErrorHandler(validationErrors.join(' , '), 400));
        }
    }
}