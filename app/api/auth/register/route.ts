import { connectToDatabase } from "@/lib/db";
import User from "@/models/user";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    try {
       const{email, password} = await request.json()

       if(!email ||  !password){
        return NextResponse.json(
            {error:"Email and passowrd are required"},
            {status: 400}
        )
       }

       await connectToDatabase()

       const existingUser = await User.findOne({email})

       if(existingUser){
        return NextResponse.json(
            {error:"Email aleady exists"},
            {status: 400}
        );
       }

       await User.create({
        email, 
        password
       })

       return NextResponse.json(
        {message:"User registered succesfully"},
        {status: 201}
       )


    } catch (error) {
        return NextResponse.json(
            {error:"Faield to register the user"},
            {status: 500}
        )
    }
}