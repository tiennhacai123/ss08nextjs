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
    //detructoring
    let find = users.find((item)=>{
        return item.id == +res.params.id
    })
    console.log('item',find);
    
    const {params} = res;
    
  return NextResponse.json({message: find ? find: ' khong tim thay '})
}
export async function PUT(request:any) {
    const data = await request.json();
    console.log('data post',data);

  return NextResponse.json({message:"Cap nhat user thanh cong voi method PUT",
    data:data
  })
}
export async function PATCH(request:any) {
    const data = await request.json();
    console.log('data post',data);

  return NextResponse.json({message:"Cap nhat user thanh cong voi method PATCH",
    data:data
  })
}
export async function DELETE(request:any) {
    const data = await request.json();
    console.log('data post',data);

  return NextResponse.json({message:"Xoa user thanh cong voi method DELETE",
    data:data
  })
}