import { useRouter } from "next/router";
import { useEffect } from "react";

export const loginCheck = (Component: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인 후 이용 가능한 페이지입니다.");
      void router.push("/section23/23-05-login-check-hoc");
    }
  }, []);

  return <Component {...props} />;
};
