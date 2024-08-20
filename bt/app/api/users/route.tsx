import { NextResponse } from 'next/server';

interface User {
    id: number;
    userName: string;
    age: number;
}

const users: User[] = [
    { id: 1, userName: 'David', age: 20 },
    { id: 2, userName: 'Linda', age: 22 }
];

export async function GET(req: any, res: any) {
    const { searchParams } = new URL(req.url);
    const search: any = searchParams.get("userName") || "";
  
    const filteredUsers = users.filter((user) =>
      user.userName.toLowerCase().includes(search.toLowerCase())
    );
    console.log(res);
  
    return NextResponse.json({ data: filteredUsers });
  }
  
  export async function POST(request: any) {
    const data = await request.json();
    console.log(data);
  
    return NextResponse.json({ message: `them users thanh cong`, users: data });
  }
  