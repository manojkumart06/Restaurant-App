import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose({
    firstName : {
        type : String,
        required : true,
        minLength : [3,"First name must be contain atleast 2 characters"],
        maxLength : [30,"First name cannot exceed more than 30 characters"] 
    },
    lastName : {
        type : String,
        required : true,
        minLength : [3,"Last name must be contain atleast 2 characters"],
        maxLength : [30,"Last name cannot exceed more than 30 characters"] 
    },
    email : {
        type : String,
        required : true,
        validate : [validator.isEmail, "Provide valid email"]
    },
    phone : {
        type : String,
        required : true,
        minLength : [10,"Phone number must contain atleast 10 characters"],
        maxLength : [10,"Phone number cannot exceed more than 10 characters"] 
    },
    time : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
})

export const Reservation = mongoose.model("Reservation",reservationSchema);