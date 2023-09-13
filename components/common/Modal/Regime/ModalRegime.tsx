import { RightOutlined } from "@ant-design/icons";
import { Image, Modal, Radio } from "antd";
import { useState } from "react";
import ModalFriendExcept from "./ModalFriendExcept";
import ModalFriendSpecific from "./ModalFriendSpecific";

import styles from "./ModalRegime.module.css";

interface RegimeProps {
  isOpen: boolean;
  onClose: () => void;
}

interface RegimeType {
  id: number;
  key?: number;
  title: string;
  imageSrc: string;
  subtitle?: string;
}

const regimes: RegimeType[] = [
  {
    id: 1,
    key: 1,
    title: "Công khai",
    imageSrc: "/img/img-home/regime/regime1.svg",
  },
  {
    id: 2,
    key: 2,
    title: "Bạn bè",
    imageSrc: "/img/img-home/regime/regime2.svg",
  },
  {
    id: 3,
    key: 3,
    title: "Bạn bè ngoại trừ...",
    imageSrc: "/img/img-home/regime/regime3.svg",
    subtitle: "Bạn bè ;Ngoại trừ :",
  },
  {
    id: 4,
    key: 4,
    title: "Chỉ mình tôi",
    imageSrc: "/img/img-home/regime/regime4.svg",
  },
  {
    id: 5,
    key: 5,
    title: "Bạn bè cụ thể",
    imageSrc: "/img/img-home/regime/regime5.svg",
    subtitle: "Hiển thị với một số bạn bè",
  },
];
const ModalRegime: React.FC<RegimeProps> = ({ isOpen, onClose }) => {
  const [selectedRegime, setSelectedRegime] = useState<number | null>(null);
  const [showFriendExceptModal, setShowFriendExceptModal] = useState(false);
  const [showFriendSpecificModal, setShowFriendSpecificModal] = useState(false);

  const toggleSecondaryModal = () => {
    setShowFriendExceptModal(!showFriendExceptModal);
  };

  const handleItemClick = (regimeId: number, regimeKey?: number) => {
    setSelectedRegime(regimeId);
    setShowFriendExceptModal(regimeKey === 3);
    setShowFriendSpecificModal(regimeKey === 5);
  };
  return (
    <>
      <Modal
        title="Chế độ xem"
        open={isOpen}
        onCancel={onClose}
        footer={null}
        className={`${styles.modalRegime} modalRegime`}
      >
        <div className={styles.modalRegime__container}>
          <div className={styles.modalRegime__content}>
            <div className={styles.modalRegime__content_title}>
              <p className={styles.modalRegime__content_mainTitle}>
                Ai có thể xem bài viết của bạn?
              </p>
              <p className={styles.modalRegime__content_subTitle}>
                Bài viết của bạn sẽ hiển thị ở Bảng tin, trang cá nhân và kết
                quả tìm kiếm.
              </p>
            </div>
            <div className={styles.modalRegime__content_listItem}>
              {regimes.map((regime) => (
                <label
                  key={regime.id}
                  className={styles.modalRegime__content_listItem_item}
                  onClick={() => handleItemClick(regime.id, regime.key)}
                >
                  <Image
                    src={regime.imageSrc}
                    alt={regime.title}
                    preview={false}
                    width={30}
                    height={30}
                    className={styles.iconRegime}
                  />
                  <div className={styles.itemTitle}>
                    <p>{regime.title}</p>
                    {regime.subtitle && (
                      <p
                        className={styles.subtitle}
                        onClick={toggleSecondaryModal}
                      >
                        {regime.subtitle}
                      </p>
                    )}
                  </div>
                  {regime.subtitle && (
                    <p
                      className={styles.subIcon}
                      onClick={toggleSecondaryModal}
                    >
                      <RightOutlined
                        style={{ marginRight: "8px" }}
                        rev={undefined}
                      />
                    </p>
                  )}

                  {!regime.subtitle && (
                    <Radio
                      value={regime.id}
                      checked={selectedRegime === regime.id}
                    />
                  )}
                </label>
              ))}
            </div>
          </div>
        </div>
      </Modal>
      {showFriendExceptModal && (
        <ModalFriendExcept
          isOpen={showFriendExceptModal}
          onClose={() => setShowFriendExceptModal(false)}
        />
      )}
      {showFriendSpecificModal && (
        <ModalFriendSpecific
          isOpen={showFriendSpecificModal}
          onClose={() => setShowFriendSpecificModal(false)}
        />
      )}
    </>
  );
};

export default ModalRegime;
