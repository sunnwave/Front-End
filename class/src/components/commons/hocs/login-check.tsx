/* eslint-disable react/display-name */

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../commons/stores";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const loadable = useRecoilValueLoadable(restoreAccessTokenLoadable);

  //1. 로그인 체크(refreshToken 미적용 시)
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken") === null) {
  //     alert("로그인 후 이용 가능한 페이지입니다.");
  //     void router.push("/section23/23-05-login-check-hoc");
  //   }
  // }, []);

  //2. 로그인 체크(refreshToken 적용 시) => *부적절* :_app.tsx에 이어서 총 2번 요청하게 되므로
  // useEffect(() => {
  //   void getAccessToken().then((newAccessToken) => {
  //     if (newAccessToken === undefined) {
  //       alert("로그인 후 이용 가능한 페이지입니다.");
  //       void router.push("/section23/23-05-login-check-hoc");
  //     }
  //   });
  // }, []);

  //3. 로그인 체크(refreshToken 적용 시, loadable 사용) => *적절* :함수를 공유하므로 _app.tsx에 이어서 총 1번 요청하게 됨
  useEffect(() => {
    void loadable.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert("로그인 후 이용 가능한 페이지입니다.");
        void router.push("/section23/23-05-login-check-hoc");
        return;
      }
    });
  }, []);

  return <Component {...props} />;
};
