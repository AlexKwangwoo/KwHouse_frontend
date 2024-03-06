1. npx create-next-app@latest

2. 쿠키설정하여 useSession없이 사용가능! (유저정보라던지...)

   클라이언트쪽!
   const cookies = new Cookies();
   cookies.set(
   "kwhouse_user",
   { user: res.data.user, token: res.data.token },
   { path: "/" }
   );
   // console.log("check cookies", cookies.get("kwhouse_user")); //get cookie from client
   //
   //
   서버사이드쪽!
   // const cookieStore = cookies();
   // const kwhouse_user = JSON.parse(cookieStore.get("kwhouse_user")!.value); //get cookie from server side
   // console.log("check_cookie", kwhouse_user.user.name);

3. prams or search keyword -> https://stackoverflow.com/questions/74580728/get-url-params-next-js-13

4. 밑에와 같이 서버컴포넌트할떄는 이렇게 async function앞에 붙여준다
   type Props = { params: { username: string } };

   const getUser = cache(async (username: string) => getUserForProfile(username));

   export default async function UserPage({ params: { username } }: Props) {
   const user = await getUser(username);

   if (!user) {
   notFound();
   }

5.
