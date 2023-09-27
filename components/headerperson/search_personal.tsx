import React, { useState } from "react";
import { Image, Button, Input, Modal } from "antd";
import styles from "./modal.module.css";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <p
        style={{ display: "flex", alignItems: "center", padding: "5px 10px" }}
        onClick={showModal}
      >
        <Image
          style={{ marginRight: 10 }}
          width={21}
          height={20}
          alt="dot"
          src={"/img/tabs_block/serch.svg"}
        />
        Tìm kiếm trên trang cá nhân
      </p>

      <Modal
        title="Tìm kiếm trên trang cá nhân"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="search_personal">
          <Input
            placeholder="Tìm kiếm trong bài viết, ảnh và thẻ của bạn"
            suffix={<SearchOutlined rev={undefined} />}
          />
        </div>
        <div className="img_search_per" onClick={()=router.push('/fillter_page')}>
          <Image src={"/img/c.png"} alt={""} width={100} preview={false} />
        </div>
        <div className={styles.question}>
          <span>Bạn đang tìm gì à?</span>
          <p>
            Tìm kiếm trên trang cá nhân của Justin Baby để xem bài viết, ảnh và
            các hoạt động hiển thị khác.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default App;
