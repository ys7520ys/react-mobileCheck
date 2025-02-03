import icon01 from "../assets/img/bell-01.svg";
import icon02 from "../assets/img/camera-01.svg";
import icon03 from "../assets/img/image-03.svg";
import icon04 from "../assets/img/marker-pin-01.svg";


export const startText = {
    title: "앱 이용을 위해\n아래 접근 권한 허용이 필요해요",
    subTitle: "접근 권한 요청을 받으면 허용해 주세요",
    img: [icon01, icon02, icon03, icon04],
    checkText: [
        {
            check_title: "위치",
            check_info: "지도 탐색 등 위치기반 서비스 이용 시"
        },
        {
            check_title: "카메라",
            check_info: "이미지 업로드를 위한 카메라 촬영 시"
        },
        {
            check_title: "알림",
            check_info: "이벤트 및 혜택 중 새로운 메시지 수신 시"
        },
        {
            check_title: "사진 및 동영상",
            check_info: "후기 작성 등 이미지 업로드 시"
        }
    ]
}