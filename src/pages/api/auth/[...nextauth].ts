// import { addUser } from "@/service/user";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// pages -> api -> auth 안에 넣어줘라고 nextjs문서에 있음.. 아무곳이나 나두면 안됨
// 서버쪽!!! 함수임 (클라이언트쪽 아님!!)
export const authOptions: NextAuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_OAUTH_ID || "",
    //   clientSecret: process.env.GOOGLE_OAUTH_SECRET || "",
    // }),

    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    //
    // **Signin Page에서 ColorButton 안의 next-auth 의signIn 을 사용해서 나온결과가 여기로온다 + 그다음에 다시 다른함수사용가능하게 해줌
    // -> jwt()가 실행됨
    async signIn({ user: { id, name, image, email } }) {
      //  signIn이 불러지면 provider에서 등록한 google 과 연결되어 결과로 다음과 같은 결과를 가져옴
      // props {
      //   user: {
      //     id: '112056743583632071462',
      //     name: 'Kwangwoo Alex',
      //     email: 'bnc3049@gmail.com',
      //     image: 'https://lh3.googleusercontent.com/a/AGNmyxZaKE4VaYvx0Lh0LaNz4Nt4uai61jAeaZZKCWHtJA=s96-c'
      //   },
      //   account: {
      //     provider: 'google',
      //     type: 'oauth',
      //     providerAccountId: '112056743583632071462',
      //     access_token: 'ya29.a0Ael9sCN1KNnwjISGEwtXPMmLcuegi7lTF6z5XEo6IPQMiNBkrZmlwbSiqAI_R9RqfxzeLg5mBNwY-6G00y1gJdUHKJQXGQpABmTMp9wrYRpLqd4GeuM1muF6pyi4lwnmO8MCWnek2HFi45eqSurO-CFLyqZoaCgYKASoSARESFQF4udJh8dCo-fZqsnGMW6MdQkouzQ0163',
      //     expires_at: 1680114945,
      //     scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid',
      //     token_type: 'Bearer',
      //     id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjFhYWU4ZDdjOTIwNThiNWVlYTQ1Njg5NWJmODkwODQ1NzFlMzA2ZjMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzODQxNDM4NzIxNjYtazhrYzdvbW1tYXRvazc0MGNiaDB0bDJuMTZsamFxZHAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIzODQxNDM4NzIxNjYtazhrYzdvbW1tYXRvazc0MGNiaDB0bDJuMTZsamFxZHAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTIwNTY3NDM1ODM2MzIwNzE0NjIiLCJlbWFpbCI6ImJuYzMwNDlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJ2VUgyWWhic2s0c1NUaklRTm9NNEJnIiwibmFtZSI6Ikt3YW5nd29vIEFsZXgiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUdObXl4WmFLRTRWYVl2eDBMaDBMYU56NE50NHVhaTYxakFlYVpaS0NXSHRKQT1zOTYtYyIsImdpdmVuX25hbWUiOiJLd2FuZ3dvbyIsImZhbWlseV9uYW1lIjoiQWxleCIsImxvY2FsZSI6ImVuLVVTIiwiaWF0IjoxNjgwMTExMzQ2LCJleHAiOjE2ODAxMTQ5NDZ9.PD95ams5igMwZsoZvhztgrX8lojEIIDpvzNMdQLSc8gjnJG8WTDBvb68tBoiUooLrBUrZMH2FLmWIV4bBT2nQSKB3GkOzOCiEOtd-4iGBt6ggBEMLBrRf3FdG9Ffe_0gKxWF_kD0JlLgz-2CG8am3csXJ4cso8-hFKofQmlJtEzKkJNoZg7vHIiAnBDcadL2E_Cq4k75tvzBQvm_RE8qBr14fW1JyGhIOQHCrV_weMiz57Ow41ZHDK80jeD5P9qlgWVabMU0SUJC6uHi7wE_Xr6lK2g2c38ivW32stw6j031YOqsRsTcE-jEYyA4Qknd3pFaHyk5o9sKhQX76UJgcA'
      //   },
      //   profile: {
      //     iss: 'https://accounts.google.com',
      //     azp: '384143872166-k8kc7ommmatok740cbh0tl2n16ljaqdp.apps.googleusercontent.com',
      //     aud: '384143872166-k8kc7ommmatok740cbh0tl2n16ljaqdp.apps.googleusercontent.com',
      //     sub: '112056743583632071462',
      //     email: 'bnc3049@gmail.com',
      //     email_verified: true,
      //     at_hash: 'vUH2Yhbsk4sSTjIQNoM4Bg',
      //     name: 'Kwangwoo Alex',
      //     picture: 'https://lh3.googleusercontent.com/a/AGNmyxZaKE4VaYvx0Lh0LaNz4Nt4uai61jAeaZZKCWHtJA=s96-c',
      //     given_name: 'Kwangwoo',
      //     family_name: 'Alex',
      //     locale: 'en-US',
      //     iat: 1680111346,
      //     exp: 1680114946
      //   }
      // }

      console.log("clicked!!!!");
      if (!email) {
        return false;
      }

      // 우리는 username을 사용하는데 google에서는 제공안해줘 우리가 중간에서 넣어줘야함! 유저가 없다면 생성할것임
      addUser({
        id,
        name: name || "",
        image,
        email,
        username: email.split("@")[0],
      });
      return true;
    },
    async session({ session, token }) {
      // getServerSession 을 쓰면 여기가 자동으로 호출되는듯함 하지만 jwt가 먼저 검증되고 여기가 불림!
      // 즉 메인루트 / 에서 이것을 부르게되는데
      console.log("in authOption session", session);
      console.log("in authOption token", token);
      const user = session?.user;
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split("@")[0] || "",
          id: token.id as string,
        };
      }
      return session;
    },
    // 로그인할때 즉 signin or session이 불려질떄 or
    //로그인할때.. 구글 통해서 한다면 alex 누른순간  위에서 signin 함수의 clicked!! 를 거친뒤 여기로 바로 오게 된다
    // jwt가 저절로 실행되는데.. 그때 유저 아이디를 token오브젝트에 넣어줄것임.. 그래야 누가 put쓰는지 알수있음
    // jwt는 session에 의해 불려지면 user부분이 없고 사인인 할때만 user부분이 포함되서 들어옴
    // 토큰이 발행될때마다 이 콜백함수가 불려지는것임!!! **********
    async jwt({ token, user }) {
      // jwt 실행!!!!!!!!

      console.log("token in jwt!!", token);
      console.log("user in jwt!!", user);
      // token in jwt!! {
      //   name: 'Kwangwoo Alex',
      //   email: 'bnc3049@gmail.com',
      //   picture: 'https://lh3.googleusercontent.com/a/AGNmyxZaKE4VaYvx0Lh0LaNz4Nt4uai61jAeaZZKCWHtJA=s96-c',
      //   sub: '112056743583632071462'
      // }
      // user in jwt!! {
      //   id: '112056743583632071462',
      //   name: 'Kwangwoo Alex',
      //   email: 'bnc3049@gmail.com',
      //   image: 'https://lh3.googleusercontent.com/a/AGNmyxZaKE4VaYvx0Lh0LaNz4Nt4uai61jAeaZZKCWHtJA=s96-c'
      // }
      if (user) {
        token.id = user.id;
      }
      // 여기서의 토큰은 항상 req에 실리게 되어진다
      // signin의 결과로 여기다음 callbackUrl로 보내지게된다 그러면서 다시 미들웨어 시작
      return token;
    },
  },
  pages: {
    // next-auth signIn을 사용하면 이페이지로 자동이동시킴!
    signIn: "/auth/signin",
  },
};
export default NextAuth(authOptions);
