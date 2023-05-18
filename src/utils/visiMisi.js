import MisiMSN from "../assets/images/VisiMisiImg/misi.svg";
import LayananMSN from "../assets/images/VisiMisiImg/layanan.svg";
import VisiMSN from "../assets/images/VisiMisiImg/visi.svg";

const visiMisi = [
  {
    id: 1,
    title: "Misi",
    icon: <img src={MisiMSN} alt="misi MSN PRODUCTION" />,
    description:
      "Become a private company that is reliable in providing services and trading in accordance with the KBLI that is owned.",
  },
  {
    id: 2,
    title: "Service",
    icon: <img src={LayananMSN} alt="layanan MSN PRODUCTION" />,
    description:
      "Gain consumer loyalty, give them a memorable experience by creating a mutually beneficial relationship.",
  },
  {
    id: 3,
    title: "Vision",
    icon: <img src={VisiMSN} alt="visi MSN PRODUCTION" />,
    description:
      "In carrying out its duties, Mulia Sejati Nusantara Production always maintains professionalism, honesty, togetherness, order and occupational health so that quality work is produced.",
  },
];

export default visiMisi;
