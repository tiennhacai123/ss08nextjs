// import React from 'react'
import { NextResponse } from "next/server"
//lấy ở trong cơ sở dữ liệu
//dùng API tương tác vào cơ sở dữ liệu ==> data
const users=[
    {
        id:1,
        name: "thao",
        address:"HN"
    },
    {
        id:2,
        name:'thu',
        address:"HCM"
    },
    {
        id:3,
        name: 'hong van',
        address:"DN"
    }
]
export async function GET(req:any,res:any) {
    console.log('res',res);
    
    
  return NextResponse.json({data:users})
}
export async function POST(request:any) {
    const data = await request.json();
    console.log('data post',data);

  return NextResponse.json({message:"Them user thanh cong",
    data:data
  })
}

