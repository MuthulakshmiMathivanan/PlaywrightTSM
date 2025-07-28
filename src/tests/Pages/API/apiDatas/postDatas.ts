
interface User {
    name: string;
    job: string;
    email:string;
    gender:string;
    status:string;
  }
  interface GORESTData{
    id: number,
    name: string,
    email: string,
    gender: string,
    status: string
  }
  interface cookieFormat {
    name: string,
    value: string,
    domain: string,
    path: string,
    httpOnly: boolean,
    secure: boolean
  }

  const users: User[] = [
    {
        name: "Magesh",
        job: "Tester",
        email:"mahi2080@gmail.com",
        gender: "male",
        status: "active"
    }
  ];
  const dataForCookie: cookieFormat[] = [
    {
      name: 'test_cookie',
      value: 'cookie_value',
      domain: 'example.com',
      path: '/',
      httpOnly: false,
      secure: false
    }
  ];
  const GoData:GORESTData[]=[{
    "id": 768999,
    "name": "magesh",
    "email": "mahi208@gmail.com",
    "gender": "male",
    "status": "active"
  }];

  
  export {users,dataForCookie,GoData};
  