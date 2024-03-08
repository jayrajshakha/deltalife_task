import React from "react";
import imagee from '../assets/img/az.jpg'

const YoutubePage = () => {
  return (
    <div className="w-[1440px] bg-slate-100 h-[610px] flex justify-center items-center ">
      <div className="w-[1140] h-[350px] flex justify-center items-center flex-col  gap-7 ">
        <div>
          <h1 className="text-center font-bold text-4xl">Our youtube videos</h1>
        </div>
        <div className="w-[1140px] mt-4 h-[254px] flex gap-7">
          <div className="w-[360px] h-[254px] ">
              <img src="https://s3-alpha-sig.figma.com/img/dfb4/af64/657df0502caaaf53db47f939a947a182?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HNiYYBF~z3bBdsLc2s07C6Ap0RCZ3y9G6dlo69~OAkS81siMnLlssBNZx2UnfPfvjk0beYx66s5c48UDJekSdZUGPj-0adNy8f2YHnOcTCC8Nj9S9BynaoYtdojNs2w9VSEB3F5zc2yzf2ArmmEsIV-fPjklc8-6HgdD5Yc3M8De4CDjLO5zKjMyswdD90fEpNdAnMN~eg6GW7fGQwLvh5rO1ubmRqFRC1msF1O4Q8ig56esSOaKlS3YmMV9cOdmatTpn-~3TdwbiXD~fTAtF4IZOLL5STNly3nDWNYUcrOyDlVsHSIgmv7wBs3Gmc~2ysWSy8Ux-3WY8rTUWovHGQ__" alt="" />
          </div>
          <div className="w-[360px] h-[254px] ">
              <img src="https://s3-alpha-sig.figma.com/img/0e3e/88be/774d1bb45a44dadde906c7d303c4856a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NuzjuTwUR6wldrklQ6GmRojgSUgN97iJHwfcTmyLIHJkeqeWbtsJX3RqxETLXmawrSEXOqLqR3rXBYtIdXyBlx5B65EeP6lWubKpJbNiftGIAtxANfW2mfRZI6I-tri7XvyEk7GUK6NYCos3vGDwo2Era6ZvSiu~UPWhQ1w2hPF0R~NPZGEebZAq2PE8hbiH-8qIWSkFpLARxvrQB4Arvqo291ZG6dZKFL9G7eUIFPfY05dsnD-X~3W5o3Ue51N6vMAeeezXukZt9n6AIVDQvfHUYhZta5gOx11OGyUzGLq-yv-qKaBFe1NI2urTi1vj03KyUCdgTd3du2fP-dOIng__" alt="" />
          </div>
          <div className="w-[360px] h-[254px]  ">
              <img src={imagee} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubePage;
