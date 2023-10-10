import { useEffect, useState } from "react";
import AddressWork from "./address";
import styles from "./address.module.css";
import { Image } from "antd";
import Bacham from "./bacham";

import Themnoilamviec from "@/components/viet_components/Nhanvien/Themnoilamviec";
import DropNoiLamViec from "@/components/viet_components/Nhanvien/DropNoiLamViec";
import Tongquannhanvien from "@/components/viet_components/Nhanvien/Tongquannhanvien";

const Tongquan = () => {
  const [cty, setCty] = useState("đ");
  const [mota, setMota] = useState("dđ");
  const [otherCty, setOtherCty] = useState("");
  const [otherMota, setOtherMota] = useState("");
  const [otherAddresses, setOtherAddresses] = useState([]);
  const updateValues = (newCty: string, newMota: string) => {
    setCty(newCty);
    setMota(newMota);
  };
  const updateTimestamp = 1627958400000;
  const isPast = (timestamp: number) => {
    const currentDate = new Date();
    const updateDate = new Date(timestamp);
    return updateDate < currentDate;
  };

  const [isPastExperience, setIsPastExperience] = useState(false);

  useEffect(() => {
    setIsPastExperience(isPast(updateTimestamp));
  }, []);
  const [roles, setRoles] = useState(false);
  const handlePClick = () => {
    setRoles(!roles);
  };

  return (
    <div>
      {!roles ? (
        <Tongquannhanvien />
      ) : (
        <div>
          {cty === "" ? (
            <div className={styles.overview}>
              <AddressWork />
            </div>
          ) : (
            <div className={styles.overview}>
              <div className={styles.company_cty}>
                <div className={styles.noilamviec}>
                  <Image
                    src={"/img/noi-lam-viec-icon.svg"}
                    alt="anh-loi"
                    preview={false}
                  />
                  <div className={styles.divcty}>
                    <p className={styles.cty}>
                      {isPastExperience ? "Từng làm việc tại" : "Làm việc tại"}
                      <span className={styles.company_name}>{cty}</span>
                    </p>
                    <span className={styles.mota}>{mota}</span>
                  </div>
                  <p className={styles.chedo}>Công khai</p>
                  <p className={`${styles.dot}`}>
                    <Bacham mota={mota} cty={cty} updateValues={updateValues} />
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Tongquan;
