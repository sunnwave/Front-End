import { useRouter } from "next/router";
import { ComponentType, ReactElement, useEffect } from "react";

export const loginCheck =
  (Component: () => JSX.Element) =>
  <P extends {}>(props: P): ReactElement<P> => {
    const router = useRouter();

    useEffect(() => {
      if (localStorage.getItem("accessToken") === null) {
        alert("로그인 후 이용 가능한 페이지입니다.");
        void router.push("/section23/23-05-login-check-hoc");
      }
    }, []);

    return <Component {...props} />;
  };
