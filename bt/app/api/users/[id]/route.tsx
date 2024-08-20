import { NextResponse } from 'next/server'
import React from 'react'
interface User{
    id:number,
    userName:string,
    age:number,
}
const users:User[]=[
        {
            id:1,
            userName:'David',
            age:20
        },
        {
            id:2,
            userName:'Linda',
            age:22
        },
    ]
    export async function GET(req:any,res:any){
        const {params} = res;       
        console.log(res);
        
        let find = users.find((item)=>{
            return item.id === +res.params.id
        })        
        console.log(find);
        return NextResponse.json({massage:find ? find : `khong tim thay doi tuong co id la ${res.params.id}`})
    }
    export async function DELETE(request: any, { params }: any) {
        const { id } = params;
        console.log(id);
      
        const userList = users.filter((user) => user.id !== +id);
      
        return NextResponse.json({
          message: `Xoa thanh cong`,
          data: userList,
        });
      }
      
      export async function PUT(request: any, { params }: any) {
        const data = await request.json();
        const { id } = params;
        console.log(data);
      
        return NextResponse.json({ message: `Cap nhat thanh cong`, id: id, users: data });
      }
      export async function PATCH(request: any, { params }: any) {
        const data = await request.json();
        const { id } = params;
        console.log(data);
      
        return NextResponse.json({ message: `cap nhat thanh cong`, id: id, users: data });
      }
      