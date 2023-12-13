// export function getAccessToken() {
//   return Auth.currentSession()
//     .then((session) => {
//       var idTokenExpire = session.getIdToken().getExpiration();
//       var refreshToken = session.getRefreshToken();
//       var currentTimeSeconds = Math.round(+new Date() / 1000);
//       if (idTokenExpire < currentTimeSeconds) {
//         Auth.currentAuthenticatedUser().then((res) => {
//           res.refreshSession(refreshToken, (err: any, data: any) => {
//             if (err) {
//               Auth.signOut();
//             } else {
//               return data.getIdToken().getJwtToken();
//             }
//           });
//         });
//       } else {
//         return session.getIdToken().getJwtToken();
//       }
//     })
//     .catch(() => {
//       return undefined;
//     });
// }

export const data = {};
